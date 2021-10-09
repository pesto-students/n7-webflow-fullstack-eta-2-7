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

const elements = [
  { title: 'Button', type: 'button', icon: <ButtonIcon />, elementType: 'ELEMENT' },
  { title: 'Text', type: 'text', icon: <BsTextCenter size="32px" />, elementType: 'ELEMENT' },
  { title: 'Image', type: 'img', icon: <BiImageAlt size="32px" />, elementType: 'ELEMENT' },
  { title: 'List', type: 'ul', icon: <AiOutlineUnorderedList size="32px" />, elementType: 'ELEMENT' },
  { title: 'ListItem', type: 'li', icon: <ListItemIcon />, elementType: 'ELEMENT' },
  { title: 'Input', type: 'input', icon: <InputIcon />, elementType: 'ELEMENT' },
  { title: 'Table', type: 'table', icon: <BsTable size="32px" />, elementType: 'ELEMENT' },
  { title: 'Table Header', type: 'tableHeader', icon: <BsTable size="32px" />, elementType: 'ELEMENT' },
  { title: 'Table Row', type: 'tableRow', icon: <BsTable size="32px" />, elementType: 'ELEMENT' },
  { title: 'Table Data Cell', type: 'tableData', icon: <BsTable size="32px" />, elementType: 'ELEMENT' },
];

const components = [
  { title: 'Grid', type: 'grid', icon: <GridIcon />, elementType: 'COMPONENT' },
  { title: 'Columns', type: 'columns', icon: <ColumnsIcon />, elementType: 'COMPONENT' },
  { title: 'Rows', type: 'rows', icon: <RowsIcon />, elementType: 'COMPONENT' },
  { title: 'Form', type: 'form', icon: <FormIcon />, elementType: 'COMPONENT' },
  { title: 'Header', type: 'header', icon: <HeadingIcon />, elementType: 'COMPONENT' },
  { title: 'Sidebar', type: 'sidebar', icon: <SidebarIcon />, elementType: 'COMPONENT' },
];

const tabs = ['Elements', 'Components'];
const tabPanels = [<HtmlElementsContainer elements={elements} />,
  <HtmlElementsContainer elements={components} />];

export default function HtmlContainer() {
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
