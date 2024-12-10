import React from 'react';
import './IconBar.css';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import AccountDropdown from './AccountDropdown';

const IconBar = () => {
  return (
    <div className="container my-4">
      <div className="d-flex justify-content-center justify-content-lg-end align-items-center gap-4">
        <div className="icon-container">
          <FaSearch className="icon" />
        </div>
        <div className="icon-container">
          <FaShoppingCart className="icon" />
        </div>
        <div className="icon-container">
          <AccountDropdown />
        </div>
      </div>
    </div>
  );
};

export default IconBar;
