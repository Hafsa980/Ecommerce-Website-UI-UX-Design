import { FaUser } from 'react-icons/fa';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AccountDropdown.css';

const AccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <div className="account-dropdown position-relative">
      <FaUser className="icon" />
      <div className="account-icon" onClick={handleToggle}>
        <i className="fas fa-user-circle"></i>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <Link to="/account">Manage My Account</Link>
            </li>
            <li>
              <Link to="/orders">My Orders</Link>
            </li>
            <li>
              <Link to="/cancellations">My Cancellations</Link>
            </li>
            <li>
              <Link to="/reviews">My Reviews</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccountDropdown;
