import React, { useState } from 'react'
import PreparedSpell from './PreparedSpell'

const Memorize = ({ memorizedSpells, setMemorizedSpells }) => {

  function remove() {
    let newMemorized = memorizedSpells.filter(memorized => {
      return !memorized
      // return [ ...prevMemorized, !memorized ] maybe by id instead?
    })
    setMemorizedSpells(newMemorized)
  }


  // add a sorting feature here by level?
  const prepared = memorizedSpells.map(memorized => {
    return  <PreparedSpell 
              memorized={ memorized }
              remove={ remove }
              memorizedSpells={ memorizedSpells }
              setMemorizedSpells={ setMemorizedSpells }
            />
  })

  return (
    <div id='memorize' className='memorized'>
      <h3>Memorized Spells</h3>
      <ul>
        { prepared }
      </ul>
    </div>
  )
}

export default Memorize