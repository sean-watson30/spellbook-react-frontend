import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { login, logout } from '../services/firebase';

import Welcome from './Welcome';
import SpellsByLevel from './SpellsByLevel';

const Header = (props) => {
  const [ charClass, setCharClass ] = useState('')
  // const photoStyles = {
  //   borderRadius: '50%',
  //   height: '2.5rem',
  //   margin: '0 1rem'
  // }

  const selectClass = (event) => {
    setCharClass(event.target.innerText)
    if (charClass === 'Wizard') {
      props.getWizSpells()
    } else if (charClass === 'Priest') {
      props.getPriSpells()
    }
  }

  return (
    <nav className='header'>
      <div>
        <ul>
          <li>
            <Link to='/'>
              {/* <span onClick={props.getWizSpells}>Wizard</span> */}
              <span onClick={ selectClass }>Wizard</span>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to='/'>
              {/* <span onClick={props.getPriSpells}>Priest</span> */}
              <span onClick={ selectClass }>Priest</span>             
            </Link>
          </li>
        </ul>
      </div>
      {/* <div>
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
      </div> */}
      <SpellsByLevel 
        charClass={ charClass } 
        handleLevelClick={ props.handleLevelClick } 
        setNull={ props.setNull } 
      />
      <Welcome user={ props.user }/>
      {/* <div>
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
                  <Link to='/'>
                    <li onClick={logout}>Logout</li>
                  </Link>
                </>
              )
            :
            <li onClick={login}>Login</li>
          }
        </ul>
      </div> */}
    </nav>
  )
}

export default Header;