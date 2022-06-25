import React from 'react';
import { Link } from 'react-router-dom';
// import { Login, Logout } from '../services/firebase';

const Header = (props) => {
  return (
    <nav className='header'>
      {/* <h1>Header Component</h1> */}
      <ul>
        <li>Welcome, 
          {/* <img src="" alt="" /> */}
        </li>
        <li>Logout</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Header;