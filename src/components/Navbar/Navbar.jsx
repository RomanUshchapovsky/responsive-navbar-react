import React from 'react';
import style from './Navbar.module.css';
import Burger from './Burger';


const Navbar = () => {
  return (
    <div className={style.nav}>
      <div className={style.logo}>
        Nav Bar
      </div>
      <Burger />
    </div>
  )
}

export default Navbar
