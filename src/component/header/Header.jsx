import React from 'react';
import path from '../../helper/path';
import DropDown from '../../modules/dropDown/DropDown';
import searchIcon from '../../assets/picture/search-again.png';
import '../header/Header.css'


function Header() {
  return (
    <header className='header'>
      <div className="logo-container">
        <img  className="logo" src={path.ECLOGO} alt='logo' />
      </div>
      
      <nav className="nav-container">
        <div className="dropdown">
          <DropDown />
        </div>
        
        <div className="search-bar">
          <span>
            <img  className="search-icon"src={searchIcon} alt='Search icon' />
          </span>
          <input  className="search-input" type='text' placeholder='Type something to find template' />
        </div>
      </nav>

      <div className="cart-container">
          <button className="cart-button">
          <img className="cart-icon" src={path.ADDCART} alt='Add to Cart' /> Add to Cart
        </button>
      </div>
    </header>
  );
}

export default Header;
