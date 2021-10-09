import React, { useState } from 'react';
import { Tree } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.min.css';

export default function Hirearchy() {
  const [treeData, setTreeData] = useState([
    {
      value: 1,
      label: 'root',
      children: [
        {
          value: '2',
          label: 'container',
          children: [
            {
              value: 3,
              label: 'row',
              children: [{
                value: 4,
                label: 'column',
                children: [{ value: '7', label: 'div' }],
              },
              {
                value: 5,
                label: 'column',
                children: [{ value: '8', label: 'div' }],
              }, {
                value: 6,
                label: 'column',
                children: [{ value: '9', label: 'div' }],
              }],
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      SOMETHING
      <Tree
        data={treeData}
        draggable
        defaultExpandAll
        onDrop={({ createUpdateDataFunction }) => setTreeData(createUpdateDataFunction(treeData))}
      />
    </div>
  );
}
