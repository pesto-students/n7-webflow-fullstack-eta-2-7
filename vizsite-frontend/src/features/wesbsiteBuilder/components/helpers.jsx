/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

export const getNodeByType = (type) => {
  const nodes = {
    text: { type: 'text', label: 'Text' },
    img: { type: 'img', label: 'Image' },
    input: { type: 'input', label: 'Input' },
    button: { type: 'button', label: 'Button' },
    ul: { type: 'ul', label: 'List' },
    li: { type: 'li', label: 'List Item' },
    table: { type: 'table', label: 'Table' },
  };
  return { value: uuidv4(), ...nodes[type] };
};

export const getCodeFromNode = (node, result) => {
  if (!node.children) {
    result = `<${node.type} id = '${node.label}'>\n${result ? `\n${result}\n` : ''}</${node.type}>`;
    return result;
  }
  let temp = '';
  for (let i = 0; i < node.children.length; i++) {
    temp += getCodeFromNode(node.children[i], result);
  }

  return `<${node.type} id = '${node.label}'>${temp ? `\n${temp}\n` : ''}</${node.type}>`;
};

export const insertNode = (jsonTree, node, parentId) => {
  if (jsonTree.value === parentId) {
    if (jsonTree.children) {
      jsonTree.children.push(node);
    } else {
      jsonTree.children = [node];
    }
  } else {
    for (let i = 0; i < jsonTree?.children?.length; i++) {
      jsonTree.children[i] = insertNode(jsonTree.children[i], node, parentId);
    }
  }

  return jsonTree;
};
