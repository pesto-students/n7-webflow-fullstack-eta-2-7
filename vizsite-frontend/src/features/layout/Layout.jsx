import React from 'react';
import Nav from './Components/Nav';

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
