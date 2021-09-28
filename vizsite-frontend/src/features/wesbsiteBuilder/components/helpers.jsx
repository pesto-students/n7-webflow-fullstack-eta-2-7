/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

export const getNodeByType = (type) => {
  if (type === 'div') {
    return { value: uuidv4(), type: 'div', label: 'Div' };
  }
  if (type === 'text') {
    return { value: uuidv4(), type: 'text', label: 'Text' };
  }
  if (type === 'img') {
    return { value: uuidv4(), type: 'img', label: 'Image' };
  }
  if (type === 'input') {
    return { value: uuidv4(), type: 'input', label: 'Input' };
  }
  if (type === 'button') {
    return { value: uuidv4(), type: 'button', label: 'Button' };
  }
  if (type === 'ul') {
    return { value: uuidv4(), type: 'ul', label: 'List' };
  }
  if (type === 'li') {
    return { value: uuidv4(), type: 'li', label: 'List Item' };
  }
  if (type === 'table') {
    return { value: uuidv4(), type: 'table', label: 'Table' };
  }
  return null;
};

export const getCodeFromNode = (node, result) => {
  if (!node.children) {
    result = `<${node.type} id = '${node.label}'>${result}</${node.type}>`;
    return result;
  }
  let temp = '';
  for (let i = 0; i < node.children.length; i++) {
    temp += getCodeFromNode(node.children[i], result);
  }

  return `<${node.type} id = '${node.label}'>${temp}</${node.type}>`;
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
