/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';

export const getNodeByType = (type) => {
  const nodes = {
    text: { type: 'text', label: 'Text', betweenTags: 'Sample Text' },
    img: { type: 'img', label: 'Image' },
    input: { type: 'input', label: 'Input' },
    button: { type: 'button', label: 'Button', betweenTags: 'Sample Text' },
    ul: { type: 'ul', label: 'List' },
    li: { type: 'li', label: 'List Item', betweenTags: 'Sample Text' },
    table: { type: 'table', label: 'Table' },
    grid: {
      type: 'div',
      label: 'Grid',
      styles: { display: 'grid', 'grid-template-columns': 'auto auto auto', padding: '10px' },
      children: [{
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          'background-color': '#770000',
          border: '1px solid yellow',
          padding: '20px',
          'text-align': 'center',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          'background-color': '#770000',
          border: '1px solid yellow',
          padding: '20px',
          'text-align': 'center',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          'background-color': '#770000',
          border: '1px solid yellow',
          padding: '20px',
          'text-align': 'center',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          'background-color': '#770000',
          border: '1px solid yellow',
          padding: '20px',
          'text-align': 'center',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          'background-color': '#770000',
          border: '1px solid yellow',
          padding: '20px',
          'text-align': 'center',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          'background-color': '#770000',
          border: '1px solid yellow',
          padding: '20px',
          'text-align': 'center',
        },
      }],
    },
    columns: {
      type: 'div',
      label: 'Columns',
      children: [{
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          float: 'left',
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          float: 'left',
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
        styles: {
          float: 'left',
          padding: '10px',
        },
      }],
    },
    rows: {
      type: 'div',
      label: 'Rows',
      children: [{
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Sample Text',
        value: uuidv4(),
      }],
    },
    form: {
      type: 'form',
      label: 'Form',
      children: [{
        type: 'label',
        label: 'Label',
        betweenTags: 'Sample Text',
        value: uuidv4(),
      },
      {
        type: 'br',
        label: 'br',
        value: uuidv4(),
      },
      {
        type: 'input',
        label: 'Input',
        value: uuidv4(),
      },
      {
        type: 'br',
        label: 'br',
        value: uuidv4(),
      },
      {
        type: 'label',
        label: 'Label',
        betweenTags: 'Sample Text',
        value: uuidv4(),
      },
      {
        type: 'br',
        label: 'br',
        value: uuidv4(),
      },
      {
        type: 'input',
        label: 'Input',
        value: uuidv4(),
      },
      {
        type: 'br',
        label: 'br',
        value: uuidv4(),
      },
      {
        type: 'input',
        label: 'Input',
        value: uuidv4(),
        properties: { type: 'submit' },
      }],
    },
  };
  return { value: uuidv4(), ...nodes[type] };
};

export const getCodeFromNode = (node, result) => {
  if (!node.children) {
    result = `<${node.type} ${node.properties ? JSON.stringify(node.properties)
      .replace('{', '')
      .replace('}', '')
      .replaceAll(':', '=')
      .replaceAll(',', ' ')
      .replaceAll('"', '') : ''} id = '${node.value}' style = "${node.styles ? JSON.stringify(node.styles).replace('{', '').replace('}', '').replaceAll('"', '')
      .replaceAll(',', ';') : ''}" >\n${node.betweenTags ? `${node.betweenTags}\n` : ''}${result ? `\n${result}\n` : ''}</${node.type}>`;
    return result;
  }
  let temp = '';
  for (let i = 0; i < node.children.length; i++) {
    temp += getCodeFromNode(node.children[i], result);
  }

  return `<${node.type} ${node.properties ? JSON.stringify(node.properties)
    .replace('{', '')
    .replace('}', '')
    .replaceAll(':', '=')
    .replaceAll(',', ' ')
    .replaceAll('"', '') : ''}  id = '${node.value}' style = "${node.styles ? JSON.stringify(node.styles).replace('{', '').replace('}', '').replaceAll('"', '')
    .replaceAll(',', ';') : ''}">${node.betweenTags ? `${node.betweenTags}\n` : ''}${temp ? `\n${temp}\n` : ''}</${node.type}>`;
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
