import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss'



const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <img src='' alt="" className='navbar__logo'/>
        <div className='navbar__header'>MyCloud</div>
        <div className='navbar__login'><NavLink to = "/login">Вход</NavLink></div>
        <div className='navbar__registration'><NavLink to="/registration">Регистрация</NavLink></div>
      </div>
    </div>
  );
};

export default Navbar;