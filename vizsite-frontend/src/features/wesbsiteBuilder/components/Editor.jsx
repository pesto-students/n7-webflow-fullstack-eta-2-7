/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { Button, Box } from '@chakra-ui/react';
import { useMutation } from 'redux-query-react';
import { CopyBlock, dracula } from 'react-code-blocks';
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
    node, setNode, greedy, fileId, handleCurrentNodeSelected,
  } = props;
  const [{ isPending, isFinished }, saveCode] = useMutation((data) => saveCodeMutation(data, fileId));
  const onSave = (data) => {
    saveCode(data);
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
      <Button style={{ marginLeft: '35%' }} onClick={() => setIsEditorView(!isEditorView)}>Toggle View</Button>
      <Button style={{ marginLeft: '35%' }} onClick={handleDownload}>Download</Button>
      {isEditorView ? (
        <div id="1" greedy={false} ref={drop} role="Dustbin" style={{ ...style, backgroundColor }}>
          {getElementBin(node)}
        </div>
      ) : <div style={{ ...style, backgroundColor }} dangerouslySetInnerHTML={{ __html: getCodeFromNode(node, '') }} />}
      <Button style={{ float: 'right' }} onClick={() => onSave(getCodeFromNode(node, ''))}>Save</Button>
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
