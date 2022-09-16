import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Welcome from './Welcome';
import SpellsByLevel from './SpellsByLevel';

const Header = (props) => {
  // const [ charClass, setCharClass ] = useState('')

  const selectClass = (event) => {
    props.setCharClass(event.target.innerText)
    // props.charClass === 'Wizard' ? props.getWizSpells() : props.getPriSpells()
    if (props.charClass === 'Wizard') {
      props.getWizSpells()
    } else if (props.charClass === 'Priest') {
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
              {/* <span onClick={ () => props.setCharClass('Wizard') }>Wizard</span> */}
              <span onClick={ selectClass }>Wizard</span>
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to='/'>
              {/* <span onClick={props.getPriSpells}>Priest</span> */}
              {/* <span onClick={ () => setCharClass('Priest') }>Priest</span> */}
              <span onClick={ selectClass }>Priest</span>
            </Link>
          </li>
        </ul>
      </div>
      <SpellsByLevel 
        charClass={ props.charClass } 
        handleLevelClick={ props.handleLevelClick } 
        setNull={ props.setNull } 
      />
      <Welcome user={ props.user }/>
    </nav>
  )
}

export default Header;