import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PreparedSpell({ memorized }) {
  const [ count, setCount ] = useState(0)
  console.log(memorized)
  function add() {
    setCount(prevCount => prevCount += 1)
  }
  function subtract() {
    setCount(prevCount => prevCount -= 1)
  }

  return (
    <li>
      {/* <Link to={`/:${memorized[1]}`}>
        { memorized[0] } x { count }
      </Link> */}
      { memorized } x { count }
      <button onClick={ add }>+</button>
      <button onClick={ subtract }>-</button>
    </li>
  )
}

// add a link from the Memorize component back to the spell's Show page to reference....