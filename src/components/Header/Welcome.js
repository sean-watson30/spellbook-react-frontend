import React from 'react';
import { Link } from 'react-router-dom';
import { login, logout } from '../../services/firebase'

export default function Welcome({ user }) {
  const photoStyles = {
    borderRadius: '50%',
    height: '2.5rem',
    margin: '0 1rem'
  }

  return (
    <div>
      <ul>
        {
          user
          ? <>
              <li className='login-greeting'>Welcome, { user.displayName } 
                <img style={ photoStyles } src={ user.photoURL } alt={ user.displayName } />
              </li>
              <Link to='/'>
                <li onClick={ logout }>Logout</li>
              </Link>
            </> 
          : <li onClick={ login }>Login</li>
        }
      </ul>
    </div>
  )
}