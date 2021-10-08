/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Stack, Box } from '@chakra-ui/react';
import { CgListTree } from 'react-icons/cg';
import { AiTwotoneBuild } from 'react-icons/ai';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useRequest } from 'redux-query-react';
import { useParams } from 'react-router-dom';

import reactToCSS from 'react-style-object-to-css';
import HtmlContainer from './components/HtmlContainer';
import CssConatainer from './components/CssConatainer';
import Editor from './components/Editor';
import ViewerContainer from './components/ViewerContainer';
import Hirearchy from './components/HirearchyViewer';
import { getProjectByIdQuery } from './Store/queries';
import { getProject } from './Store/selectors';

const views = [{ icon: <AiTwotoneBuild />, label: 'build' }, { icon: <CgListTree />, label: 'hirearchy' }];

export default function WebsiteBuilder() {
  const { id } = useParams();
  const project = useSelector(getProject);
  useRequest(getProjectByIdQuery(id));
  const [view, setView] = React.useState(views[0].label);
  const [node, setNode] = useState({ value: '1', type: 'body', label: 'root' });
  const [fileId, setFileId] = useState();

  useEffect(() => {
    if (project) {
      setNode(project.site.siteObj);
      setFileId(project.site.fileId);
    }
  }, [project]);
  const [selectedNode, setSelectedNode] = useState({});
  const [selectedNodeEle, setSelectedNodeEle] = useState(null);
  const [currentStyleObj, setCurrentStyleObj] = useState({});

  useEffect(() => {
    const { stylesObj } = selectedNode;
    setCurrentStyleObj({ ...stylesObj } || {});
  }, [selectedNode]);

  const handleApplyStyles = () => {
    const styleString = reactToCSS(currentStyleObj);
    selectedNode.styles = styleString;
    selectedNode.stylesObj = currentStyleObj;
    const nodeString = JSON.stringify(node);
    setNode(JSON.parse(nodeString));
  };

  const handleCurrentNodeSelected = (e, nodeEle) => {
    e.stopPropagation();
    if (selectedNodeEle?.target?.style) {
      selectedNodeEle.target.style.border = '1px dashed black';
    }
    e.target.style.border = '2px dashed blue';
    if (!nodeEle?.stylesObj) {
      nodeEle.stylesObj = {};
    }
    setSelectedNodeEle(e);
    setSelectedNode(nodeEle);
  };

  const handleStyleObjChange = ({ e, key }) => {
    if (currentStyleObj) {
      currentStyleObj[key] = e.target.value;
      setCurrentStyleObj({ ...currentStyleObj });
    }
  };

  console.log(currentStyleObj, node);

  return (
    <DndProvider backend={HTML5Backend}>
      <Stack height="90vh" background="gray.50" direction={{ md: 'column', lg: 'row' }}>
        <Box p={2} bg="white" boxShadow="lg" margin="2">
          <ViewerContainer views={views} setView={setView} />
        </Box>
        <Box flex={1} boxShadow="lg" bg="white" mt="2" p="2">
          {view === 'build' ? <HtmlContainer /> : <Hirearchy node={node} setNode={setNode} />}
        </Box>
        <Box flex={3} p="2">
          <Editor
            node={node}
            setNode={setNode}
            fileId={fileId}
            handleCurrentNodeSelected={handleCurrentNodeSelected}
          />
        </Box>
        <Box flex={1} boxShadow="lg" bg="white" mt="2" p="2" overflowY="scroll">
          <CssConatainer
            selectedNodeStylesObj={currentStyleObj || {}}
            applyStyles={handleApplyStyles}
            handleStlyeObjChange={handleStyleObjChange}
          />
        </Box>
      </Stack>
    </DndProvider>
  );
}
