import React, { useState } from 'react'
import PreparedSpell from './PreparedSpell'

const Memorize = ({ memorizedSpells, setMemorizedSpells }) => {

  function remove() {
    let newMemorized = memorizedSpells.filter(memorized => {
      return !memorized
    })
    setMemorizedSpells(newMemorized)
  }
  // need to find a way to have a remove() function that removes the individual spell from the memorized state

  return (
    <div id='memorize' className='memorized'>
      <h3>Memorized Spells</h3>
      <ul>
        {
          memorizedSpells.map(memorized => {
            return (
              // <PreparedSpell memorized={ memorized } remove={ remove }/>
              <PreparedSpell 
                memorized={ memorized }
                remove={ remove }
                memorizedSpells={ memorizedSpells }
                setMemorizedSpells={ setMemorizedSpells }
              />
            ) 
          })
        }
      </ul>
    </div>
  )
}

export default Memorize