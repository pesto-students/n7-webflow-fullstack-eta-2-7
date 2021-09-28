/* eslint-disable import/no-unresolved */
/* eslint-disable object-curly-newline */
import {
  Tabs, TabList, TabPanels, Tab, TabPanel,
} from '@chakra-ui/react';
import React from 'react';
import { BiImageAlt } from 'react-icons/bi';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { BsTextCenter, BsTable } from 'react-icons/bs';
import ButtonIcon from 'icons/ButtonIcon';
import ListItemIcon from 'icons/ListItemIcon';
import InputIcon from 'icons/InputIcon';
import GridIcon from 'icons/GridIcon';
import HeadingIcon from 'icons/HeadingIcon';
import FormIcon from 'icons/FormIcon';
import RowsIcon from 'icons/Rows';
import ColumnsIcon from 'icons/Columns';
import SidebarIcon from 'icons/Sidebar';
import HtmlElementsContainer from './HtmlElmentsContainer';

export default function HtmlContainer(props) {
  const { setNode } = props;
  const elements = [
    { title: 'Button', label: 'Button', type: 'button', icon: <ButtonIcon />, setNode, elementKey: 'BUTTON', properties: { text: 'Submit' } },
    { title: 'Text', label: 'Text', type: 'text', icon: <BsTextCenter size="32px" />, setNode, elementKey: 'TEXT', properties: { text: 'Hello!!!' } },
    { title: 'Image', label: 'Image', type: 'img', icon: <BiImageAlt size="32px" />, setNode, elementKey: 'IMAGE', properties: { text: 'Submit', properties: { src: './cat.jpg', alt: 'cat' } } },
    { title: 'List', label: 'List', type: 'ul', icon: <AiOutlineUnorderedList size="32px" />, setNode, elementKey: 'LIST', properties: { items: ['item1', 'item2', 'item3'] } },
    { title: 'ListItem', label: 'List Item', type: 'li', icon: <ListItemIcon />, setNode, elementKey: 'LIST_ITEM', properties: { text: 'Hello, this is a list item!!!' } },
    { title: 'Input', label: 'Input', type: 'input', icon: <InputIcon />, setNode, elementKey: 'INPUT', properties: { placeHolder: 'input Text' } },
    { title: 'Table', label: 'Table', type: 'table', icon: <BsTable size="32px" />, setNode, elementKey: 'TABLE', properties: { headers: ['Column1', 'Column2', 'Column3'], rowValues: [['item00', 'item01', 'item02'], ['item10', 'item11', 'item12'], ['item20', 'item21', 'item22']] } },
  ];

  const components = [
    { title: 'Grid', icon: <GridIcon /> },
    { title: 'Column', icon: <ColumnsIcon /> },
    { title: 'Rows', icon: <RowsIcon /> },
    { title: 'Form', icon: <FormIcon /> },
    { title: 'Header', icon: <HeadingIcon /> },
    { title: 'Sidebar', icon: <SidebarIcon /> },
  ];

  const tabs = ['Elements', 'Components'];
  const tabPanels = [<HtmlElementsContainer elements={elements} />,
    <HtmlElementsContainer elements={components} />];

  return (
    <Tabs colorScheme="brand" variant="solid-rounded" size="sm" color="gray.100">
      <TabList>
        {tabs.map((tab) => <Tab>{tab}</Tab>)}
      </TabList>

      <TabPanels>
        {tabPanels.map((tabPanel) => <TabPanel>{tabPanel}</TabPanel>)}
      </TabPanels>
    </Tabs>
  );
}
