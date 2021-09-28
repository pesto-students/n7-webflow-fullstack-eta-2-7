/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import CodeEditor from './CodeEditor';
import { insertNode, getNodeByType, getCodeFromNode } from './helpers';
import ElementBin from './ElementBin';

const style = {
  overflow: 'auto',
  height: '70%',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '50px',
  paddingTop: '5px',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
};
export default function Editor(props) {
  const {
    node, setNode, greedy,
  } = props;
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
  let backgroundColor = 'black';
  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'darkgreen';
  }

  useEffect(() => {
  }, [node]);
  function MiscY(data) {
    const {
      value, label, type, children,
    } = data;
    return (
      <ElementBin id={value} node={node} setNode={setNode} value={value} type={type} label={label}>
        {children?.length && children.map((item) => MiscY(item))}
      </ElementBin>
    );
  }
  return (
    <>
      <div id="1" greedy={false} ref={drop} role="Dustbin" style={{ ...style, backgroundColor }}>
        {MiscY(node)}
      </div>
      <CodeEditor content={getCodeFromNode(node, '')} />
    </>
  );
}
