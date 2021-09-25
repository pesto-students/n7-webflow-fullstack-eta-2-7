import React from 'react';
import NavItem from './NavItem';

export default function NavItems({ navItems }) {
  return (
    <>
      {navItems.map((navItem) => <NavItem key={navItem.title} {...navItem} />)}
    </>
  );
}
