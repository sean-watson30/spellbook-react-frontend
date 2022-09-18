import React, { useState } from 'react'
import PreparedSpell from './PreparedSpell'

const Memorize = ({ memorizedSpells, onAdd }) => {
  // console.log(memorizedSpells)
  // const [ count, setCount ] = useState('0')

  // function add() {
  //   setCount(prevCount => prevCount + 1)
  // }
  // function subtract() {
  //   setCount(prevCount => prevCount - 1)
  // }

  function remove() {

  }

  return (
    <div id='memorize' className='memorized'>
      {/* <h3>Memorize</h3>
      <ul>
        {
          memorizedSpells.map(memorized => {
            return (
              <PreparedSpell memorized={ memorized }/>
            ) 
          })
        }
      </ul> */}
     
      {/* use add() and subtract() functions for each spell to affect count */}
      
    </div>
  )
}

export default Memorize

// possibly changing state format to an object that contains spell name and spell count...this way the add() and subtract() will affect the individual spell count?

// need to find a way to have a remove() function that removes the individual spell form the memorized state

// add a link from the Memorize component back to the spell's Show page to reference....