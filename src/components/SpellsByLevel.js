import React from "react";
import { Link } from 'react-router-dom';

const SpellsByLevel = ({ setNull, handleLevelClick, charClass }) => {
  const spellsByLevel = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

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
                ? <>
                    {
                      spellsByLevel.map((level) => {
                        return (<li onClick={ handleLevelClick }>{ level }</li>)
                      })
                    }
                  </>
                : <>
                    {
                      spellsByLevel.map((level) => {
                        if ( level < 8 ) {
                          return (<li onClick={ handleLevelClick }>{ level }</li>)
                        }
                      })
                    }
                  </>
              }
          </>
        }
      </ul>
    </div>
  )
}

export default SpellsByLevel
