import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

const Header = () => {
  function renderLinks(links) {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
          >
            {link.label}
          </NavLink>
        </li>
      )
    })
  }

  const links = [
    {to: '/',label: 'Популярные слова'},
    {to: '/activity',label: 'Активность'},
    {to: '/news',label: 'Количество новостей'},
  ]

  return (
    <nav className='Header'>
      <Logo/>
      <ul>
        { renderLinks(links) }
      </ul>
    </nav>
  );
};

export default Header;