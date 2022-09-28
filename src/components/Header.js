import React from 'react';
import { Link } from 'react-router-dom';

import Welcome from './Welcome';
import SpellsByLevel from './SpellsByLevel';

export default function Header(props) {

  // const selectClass = (event) => {
  //   props.setCharClass(event.target.innerText)
  //   if (props.charClass === 'Wizard') {
  //     props.getWizSpells()
  //   } else if (props.charClass === 'Priest') {
  //     props.getPriSpells()
  //   }
  // }

  return (
    <nav className='header'>
      <div>
        <ul>
          <li>
            <Link to='/'>
              <span onClick={ () => {
                props.setCharClass('Wizard')
                props.getWizSpells()
              } }>Wizard</span>
              {/* <span onClick={ selectClass }>Wizard</span> */}
            </Link>
          </li>
          <li>|</li>
          <li>
            <Link to='/'>
              <span onClick={ () => {
                props.setCharClass('Priest') 
                props.getPriSpells()
              } }>Priest</span>
              {/* <span onClick={ selectClass }>Priest</span> */}
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