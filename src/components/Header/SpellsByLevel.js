import React from "react";
import { Link } from 'react-router-dom';

export default function SpellsByLevel({ setNull, handleLevelClick, charClass }) {
  const spellsByLevel = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

  const wizard = spellsByLevel.map((level) => {
    return (<li onClick={ handleLevelClick }>{ level }</li>)
  })

  const priest = spellsByLevel.map((level) => {
    if ( level < 8 ) {
      return (<li onClick={ handleLevelClick }>{ level }</li>)
    }
  })

  return (
    <div>
      <ul>
        {
          charClass === ''
          ? <div> (Select Character Class) </div>
          : <>
              <Link to='/'>
                <li onClick={ setNull }>Spells by Level</li>
              </Link>
              {
                charClass === 'Wizard'
                ? <> { wizard } </>
                : <> { priest } </>
              }
          </>
        }
      </ul>
    </div>
  )
}