import React, { useState } from 'react'
import PreparedSpell from './PreparedSpell'

const Memorize = ({ memorizedSpells, onAdd }) => {

  function remove() {
    // need to find a way to have a remove() function that removes the individual spell form the memorized state
  }

  return (
    <div id='memorize' className='memorized'>
      {/* <h3>Memorized Spells</h3>
      <ul>
        {
          memorizedSpells.map(memorized => {
            return (
              <PreparedSpell memorized={ memorized } />
            ) 
          })
        }
      </ul> */}
    </div>
  )
}

export default Memorize