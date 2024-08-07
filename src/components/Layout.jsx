"use client"
import React from 'react';
import { useMenuStore } from '../store/store';
import MenuBar from './MenuBar';

const Layout = ({ children }) => {

  const { menu, setMenu, closeMenu } = useMenuStore();

  return (
    <div className='h-auto min-h-screen'>
      {menu ? <MenuBar /> : <main>{children}</main>}
    </div>
  );
};

export default Layout;
