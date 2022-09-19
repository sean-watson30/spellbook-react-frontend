import React, { useState } from "react";

export default function PreparedSpell({ memorized }) {
  const [ count, setCount ] = useState(0)

  function add() {
    setCount(prevCount => prevCount += 1)
  }
  function subtract() {
    setCount(prevCount => prevCount -= 1)
  }

  return (
    <li>
      { memorized } x { count }
      <button onClick={ add }>+</button>
      <button onClick={ subtract }>-</button>
    </li>
  )
}

// add a link from the Memorize component back to the spell's Show page to reference....