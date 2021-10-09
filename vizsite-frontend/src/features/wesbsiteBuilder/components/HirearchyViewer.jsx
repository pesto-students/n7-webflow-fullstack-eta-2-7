import React, { useState } from 'react';
import { Tree } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.min.css';
import { Button } from '@chakra-ui/react';
import { deleteNodeFromTree } from './helpers';

export default function Hirearchy(props) {
  const { node, setNode } = props;
  const [nodeToDelete, setNodeToDelete] = useState();
  const [treeData, setTreeData] = useState([node]);
  const onDelete = () => {
    deleteNodeFromTree(node, nodeToDelete);
    setNodeToDelete(null);
  };
  return (
    <div>
      { nodeToDelete
        && <Button style={{ float: 'right' }} onClick={() => onDelete()}>Delete Element</Button>}
      <Tree
        data={treeData}
        draggable
        defaultExpandAll
        onSelect={(data) => setNodeToDelete(data.value)}
        onDrop={({ createUpdateDataFunction }) => {
          setTreeData(createUpdateDataFunction(treeData));
          setNode(treeData[0]);
        }}
      />
    </div>
  );
}
