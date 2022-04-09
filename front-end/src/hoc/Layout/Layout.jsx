import React from 'react';
import './Layout.css';
import Header from '../../components/header/header';

const Layout = (props) => {
  return (
    <div className='Layout'>
      <Header/>
      <main>
        { props.children }
      </main>
    </div>
  );
};

export default Layout;