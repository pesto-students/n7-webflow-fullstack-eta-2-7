/* eslint-disable no-unused-vars */
import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { insertNode, getNodeByType } from './helpers';

function getStyle(backgroundColor) {
  return {
    minHeight: '2rem',
    minWidth: '8rem',
    color: 'black',
    backgroundColor,
    padding: '1rem',
    margin: '5px',
    textAlign: 'center',
    float: 'left',
    fontSize: '1rem',
    border: '1px dashed black',
  };
}

const ElementBin = (props) => {
  const {
    label, value, node, setNode, greedy, children,
  } = props;

  const [{ isOver, isOverCurrent }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop && !greedy) {
        return;
      }
      setNode(insertNode(node, getNodeByType(item.type), value));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  }), [greedy]);
  const text = greedy ? 'greedy' : 'not greedy';
  let backgroundColor = 'white';
  if (isOverCurrent || (isOver && greedy)) {
    backgroundColor = 'darkgreen';
  }
  return (
    <>
      {value !== '1' && (
      <div greedy={false} ref={drop} role="Dustbin" style={getStyle(backgroundColor)}>
        {label}
        <div>{children}</div>
      </div>
      )}
      {value === '1' && (
        <>
          <p>Drop Here</p>
          <div>{children}</div>
        </>
      )}
    </>
  );
};

export default ElementBin;