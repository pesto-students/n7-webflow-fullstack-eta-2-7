import React, { useState } from 'react';
import { Tree } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.min.css';

export default function Hirearchy(props) {
  const { node, setNode } = props;
  const [treeData, setTreeData] = useState([node]);
  return (
    <div>
      <Tree
        data={treeData}
        draggable
        defaultExpandAll
        onDrop={({ createUpdateDataFunction }) => {
          setTreeData(createUpdateDataFunction(treeData));
          setNode(treeData[0]);
        }}
      />
    </div>
  );
}
