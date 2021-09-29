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
  { title: 'Button', label: 'Button', type: 'button', icon: <ButtonIcon /> },
  { title: 'Text', label: 'Text', type: 'text', icon: <BsTextCenter size="32px" /> },
  { title: 'Image', label: 'Image', type: 'img', icon: <BiImageAlt size="32px" /> },
  { title: 'List', label: 'List', type: 'ul', icon: <AiOutlineUnorderedList size="32px" /> },
  { title: 'ListItem', label: 'List Item', type: 'li', icon: <ListItemIcon /> },
  { title: 'Input', label: 'Input', type: 'input', icon: <InputIcon /> },
  { title: 'Table', label: 'Table', type: 'table', icon: <BsTable size="32px" /> },
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
