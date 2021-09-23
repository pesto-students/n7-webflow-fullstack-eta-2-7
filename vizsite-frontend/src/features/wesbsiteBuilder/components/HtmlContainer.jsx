// import { SimpleGrid } from '@chakra-ui/react';
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

export default function HtmlContainer() {
  const elements = [
    { title: 'Button', icon: <ButtonIcon /> },
    { title: 'Text', icon: <BsTextCenter size="32px" /> },
    { title: 'Image', icon: <BiImageAlt size="32px" /> },
    { title: 'List', icon: <AiOutlineUnorderedList size="32px" /> },
    { title: 'ListItem', icon: <ListItemIcon /> },
    { title: 'Input', icon: <InputIcon /> },
    { title: 'Table', icon: <BsTable size="32px" /> },
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
