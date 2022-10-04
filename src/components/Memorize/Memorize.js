import React, { useState } from 'react'
import PreparedSpell from './PreparedSpell'

export default function Memorize({ memorizedSpells, setMemorizedSpells }) {
  const [ showMemorized, setShowMemorized ] = useState(false)
  let levels = [1, 2, 3, 4, 5, 6, 7, 8, 9] 

  function toggle() {
    setShowMemorized(!showMemorized)
  }

  function remove() {
    let newMemorized = memorizedSpells.filter(memorized => {
      return !memorized
    })
    setMemorizedSpells(newMemorized)
  }

  const spellLevels = levels.map(level => { 
    let memorizedFilter = memorizedSpells.map(memorized => { 
      if (memorized.level === `${level}`) {
        return (
          <PreparedSpell
            memorized={ memorized }
            remove={ remove }
            key={ memorized._id }
          />
        )
      }
    })
    return (
      <div>
        <hr />
        <h5>Level { level } Spells</h5>
        { memorizedFilter }
      </div>
    )
  })

  return (
    <div id='memorize' className='memorized'>
      <label htmlFor="mem-check">View Memorized Spells?</label>
      <input type="checkbox" 
        name="Show Memoirized?" id="mem-check" 
        onClick={ toggle }
      />
      { 
        !showMemorized ? <></> : <> <h3>Memorized Spells</h3> { spellLevels }</>
      }
    </div>
  )
}