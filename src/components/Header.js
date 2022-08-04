import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../services/firebase';

const Header = (props) => {
  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem'
  }
  return (
    <nav className='header'>
      <div>
        <ul>
          <Link to='/'>
            <li onClick={props.setNull}>Spells by Level</li>
          </Link>
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
          {
            props.user ?
              (
                <>
                  <li className='login-greeting'>Welcome, {props.user.displayName} 
                    <img 
                      style={photoStyles}
                      src={props.user.photoURL} 
                      alt={props.user.displayName} 
                    />
                  </li>
                  <li onClick={logout}>Logout</li>
                </>
              )
            :
            <li onClick={login}>Login</li>
          }
        </ul>
      </div>
    </nav>
  )
}

export default Header;