import React, { useState } from "react";
import { Link } from "react-router-dom";

// export default function PreparedSpell({ memorized, remove }) {
export default function PreparedSpell({ memorized, memorizedSpells, setMemorizedSpells }) {
  const [ count, setCount ] = useState(0)
  // console.log(memorized)
  function add() {
    setCount(prevCount => prevCount += 1)
  }
  function subtract() {
    setCount(prevCount => prevCount -= 1)
  }

  function remove() {
    let newMemorized = memorizedSpells.filter(memorized => {
      return !memorized // currently clears out all state...need to isolate
    })
    setMemorizedSpells(newMemorized)
  }

  return (
    <li>
      {/* <Link to={`/:${memorized[1]}`}>
        { memorized[0] } x { count }
      </Link> */}
      { memorized } x { count }
      <button onClick={ add }>+</button>
      <button onClick={ subtract }>-</button>
      <button onClick={ remove }>Remove</button>
    </li>
  )
}

// add a link from the Memorize component back to the spell's Show page to reference....