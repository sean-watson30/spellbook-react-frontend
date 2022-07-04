import React from 'react';
// import { Link } from 'react-router-dom';
// import { Login, Logout } from '../services/firebase';

const Header = (props) => {
  return (
    <nav className='header'>
      <div>
        <ul>
          <li onClick={props.setNull}>Spells by Level</li>
          <li onClick={props.handleLevelClick}>1</li>
          <li onClick={props.handleLevelClick}>2</li>
          <li onClick={props.handleLevelClick}>3</li>
          <li onClick={props.handleLevelClick}>4</li>
          <li onClick={props.handleLevelClick}>5</li>
          <li onClick={props.handleLevelClick}>6</li>
          <li onClick={props.handleLevelClick}>7</li>
          <li onClick={props.handleLevelClick}>8</li>
          <li onClick={props.handleLevelClick}>9</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Welcome, 
            {/* <img src="" alt="" /> */}
          </li>
          <li>Logout</li>
          <li>Login</li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;