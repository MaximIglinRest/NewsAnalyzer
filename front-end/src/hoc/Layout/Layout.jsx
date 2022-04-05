import React from 'react';
import './Layout.css';
import Header from '../../components/header/header';
import ToolsBar from '../../components/ToolsBar/ToolsBar';

const Layout = (props) => {
  return (
    <div className='Layout'>
      <Header/>
      <ToolsBar/>
      <main>
        { props.children }
      </main>
    </div>
  );
};

export default Layout;