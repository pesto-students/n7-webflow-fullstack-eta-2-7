/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { v4 as uuidv4 } from 'uuid';
import randomString from 'randomstring';

export const getNodeByType = (type) => {
  const nodes = {
    text: { type: 'text', label: 'Text', betweenTags: 'Sample Text' },
    img: { type: 'img', label: 'Image' },
    input: { type: 'input', label: 'Input' },
    button: { type: 'button', label: 'Button', betweenTags: 'Sample Text' },
    ul: { type: 'ul', label: 'List' },
    li: { type: 'li', label: 'List Item', betweenTags: 'Sample Text' },
    table: { type: 'table', label: 'Table' },
    tableHeader: { type: 'th', label: 'Table Header' },
    tableRow: { type: 'tr', label: 'Table Row' },
    tableData: { type: 'td', label: 'Table Data Cell' },
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
      styles: {
        display: 'flex',
      },
      children: [{
        type: 'div',
        label: 'Div',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        value: uuidv4(),
        styles: {
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
        value: uuidv4(),
      },
      {
        type: 'div',
        label: 'Div',
        value: uuidv4(),
      },
      {
        type: 'div',
        label: 'Div',
        value: uuidv4(),
      }],
    },
    form: {
      type: 'form',
      label: 'Form',
      children: [{
        type: 'label',
        label: 'Label',
        betweenTags: 'Email',
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
        styles: {
          border: '2px solid blue',
        },
      },
      {
        type: 'br',
        label: 'br',
        value: uuidv4(),
      },
      {
        type: 'label',
        label: 'Label',
        betweenTags: 'Password',
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
        styles: {
          border: '2px solid blue',
          padding: '10px',
        },
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
        attributes: { type: 'submit' },
        styles: {
          background: 'blue',
          padding: '10px',
          color: 'white',
        },
      }],
      styles: {
        'text-align': 'left',
        color: 'blue',
      },
    },
    header: {
      type: 'div',
      label: 'Header',
      styles: {
        position: 'sticky',
        top: '0',
        display: 'flex',
        'justify-content': 'space-between',
        'align-items': 'center',
        padding: '10px',
        background: 'blue',
        color: 'white',
      },
      children: [{
        type: 'div',
        label: 'Div',
        betweenTags: 'Logo',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        value: uuidv4(),
        children: [
          {
            type: 'div',
            label: 'Div',
            betweenTags: 'Home',
            value: uuidv4(),
            styles: {
              padding: '10px',
            },
          },
          {
            type: 'div',
            label: 'Div',
            betweenTags: 'About',
            value: uuidv4(),
            styles: {
              padding: '10px',
            },
          },
          {
            type: 'div',
            label: 'Div',
            betweenTags: 'Work',
            value: uuidv4(),
            styles: {
              padding: '10px',
            },
          },
          {
            type: 'div',
            label: 'Div',
            betweenTags: 'Contact us',
            value: uuidv4(),
            styles: {
              padding: '10px',
            },
          },
        ],
        styles: {
          display: 'flex', 'justify-content': 'space-between', padding: '10px',
        },
      }],
    },
    sidebar: {
      type: 'div',
      label: 'Sidebar',
      styles: {
        display: 'flex',
        'flex-direction': 'column',
        padding: '10px',
        background: 'blue',
        color: 'white',
        height: '100vh',
        width: '15vw',
      },
      children: [{
        type: 'div',
        label: 'Div',
        betweenTags: 'Logo',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Dashboard',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Users',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Products',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },
      {
        type: 'div',
        label: 'Div',
        betweenTags: 'Orders',
        value: uuidv4(),
        styles: {
          padding: '10px',
        },
      },

      ],
    },
  };
  return { value: uuidv4(), ...nodes[type] };
};

export const getCodeFromNode = (node, result) => {
  if (!node.children) {
    result = `<${node.type} 
    ${node?.attributes ? Object.keys(node?.attributes).map((a) => `${a}="${node.attributes[a]}"`).join(' ')
    : ''} 
      id = '${node.value}' style = "${node.styles ? JSON.stringify(node.styles).replace('{', '').replace('}', '').replaceAll('"', '')
  .replaceAll(',', ';') : ''}" >\n${node.betweenTags ? `${node.betweenTags}\n` : ''}${result ? `\n${result}\n` : ''}</${node.type}>`;
    return result;
  }
  let temp = '';
  for (let i = 0; i < node.children.length; i++) {
    temp += getCodeFromNode(node.children[i], result);
  }
  return `<${node.type}  
  ${node?.attributes ? Object.keys(node?.attributes).map((a) => `${a}="${node.attributes[a]}"`).join(' ')
    : ''} 
    id = '${node.value}' style = "${node.styles ? JSON.stringify(node.styles).replace('{', '').replace('}', '').replaceAll('"', '')
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

export const getCodeFromNodeForDownload = (node, result, style) => {
  if (!node.children) {
    let className;
    if (node.styles) {
      className = `vizsite-css-${randomString.generate()}`;
      style += `.${className} {
        ${node.styles}
      }`;
    }

    result = `
      <${node.type}' ${className ? `class=${className}` : ''}>
          ${node.betweenTags ? `${node.betweenTags}\n` : ''}${result ? `\n${result}\n` : ''}
      </${node.type}>`;

    return { result, style };
  }
  let temp = '';
  for (let i = 0; i < node.children.length; i++) {
    const res = getCodeFromNodeForDownload(node.children[i], result, style);
    temp += res.result;
    style = res.style;
  }
  let className;
  if (node.styles) {
    className = `vizsite-css-${randomString.generate()}`;
    style += `.${className} {
      ${node.styles}
    }`;
  }

  return {
    result: `
  <${node.type}' ${className ? `class=${className}` : ''}>
      ${node.betweenTags ? `${node.betweenTags}\n` : ''}${temp ? `\n${temp}\n` : ''}
  </${node.type}>`,
    style,
  };
};

export const deleteNodeFromTree = (node, value) => {
  if (node?.children) {
    for (let i = 0; i < node?.children?.length; i++) {
      const filtered = node?.children?.filter((f) => f.value === value);
      if (filtered && filtered.length > 0) {
        node.children = node.children.filter((f) => f.value !== value);
        return node;
      }
      node = deleteNodeFromTree(node.children[i], value);
    }
  }
  return node;
};
