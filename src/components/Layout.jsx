import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ role, username, children }) => {
  return (
    <div className="d-flex">
      <Sidebar role={role} />
      <div className="flex-grow-1">
        <Header username={username} />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
