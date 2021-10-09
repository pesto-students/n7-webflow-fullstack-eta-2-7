/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { useMutation } from 'redux-query-react';
import { useParams } from 'react-router-dom';
import { CopyBlock, dracula } from 'react-code-blocks';
import { AiOutlineSave } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import {
  Button, Stack, IconButton, Text, Switch, Box,
} from '@chakra-ui/react';
import { saveCodeMutation } from '../Store/queries';
import { ItemTypes } from './ItemTypes';
import {
  insertNode, getNodeByType, getCodeFromNode, getCodeFromNodeForDownload,
} from './helpers';
import ElementBin from './ElementBin';

const beautifyHtml = require('js-beautify').html;

const style = {
  overflow: 'auto',
  height: '70%',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'black',
  padding: '50px',
  paddingTop: '5px',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  border: '1px dashed black',
};

export default function Editor(props) {
  const {
    node, setNode, greedy, fileId, handleCurrentNodeSelected, fileLink,
  } = props;
  const { id } = useParams();
  const [{ isPending, isFinished }, saveCode] = useMutation((data) => saveCodeMutation(data, node, fileId, id));
  const onSave = (data) => {
    saveCode(data, node, fileId, id);
  };
  const [isEditorView, setIsEditorView] = useState(true);
  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop && !greedy) {
        return;
      }
      setNode(insertNode(node, getNodeByType(item.type), '1'));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }), [greedy]);
  let backgroundColor = 'white';
  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'l';
  }

  useEffect(() => {
  }, [node]);
  function getElementBin(data) {
    const {
      value, label, type, children, stylesObj = {},
    } = data;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div onClick={(e) => { handleCurrentNodeSelected(e, data); }}>
        <ElementBin id={value} node={node} setNode={setNode} value={value} type={type} label={label} stylesObj={stylesObj}>
          {children?.length && children.map((item) => getElementBin(item))}
        </ElementBin>
      </div>
    );
  }

  const handleDownload = useCallback(
    () => {
      const code = getCodeFromNodeForDownload(node, '', '');
    },
    [node],
  );

  return (
    <>
      <Stack direction="row" bg="white" spacing="4" my="4" p="2" boxShadow="xl" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" fontWeight="semibold" fontSize="md" mx="4">
          <Text>
            Editor
          </Text>
          <Switch size="lg" onChange={() => setIsEditorView(!isEditorView)} value={isEditorView} />
          <Text>
            Web preview
          </Text>
        </Stack>
        <Stack direction="row">
          <IconButton icon={<BsDownload />} />
          <Button onClick={() => onSave(getCodeFromNode(node, ''))} rightIcon={<AiOutlineSave />}>Save</Button>
        </Stack>
      </Stack>

      {isEditorView ? (
        <div id="1" greedy={false} ref={drop} role="Dustbin" style={{ ...style, backgroundColor }}>
          {getElementBin(node)}
        </div>
      ) : <div style={{ ...style, backgroundColor }} dangerouslySetInnerHTML={{ __html: getCodeFromNode(node, '') }} />}
      <Box maxH="20vh" overflowY="scroll">
        <CopyBlock
          text={beautifyHtml(getCodeFromNode(node, ''))}
          language="html"
          showLineNumbers
          wrapLines
          theme={dracula}
        />
      </Box>
    </>
  );
}
