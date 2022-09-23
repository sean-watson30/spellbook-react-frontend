import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PreparedSpell({ memorized, remove }) {
  const [ count, setCount ] = useState(0)

  function add() {
    setCount(prevCount => prevCount += 1)
  }
  function subtract() {
    setCount(prevCount => prevCount -= 1)
  }

  const id = memorized._id

  return (
    <li>
      <Link to={`${id}`}>
        { memorized.name } x { count }
      </Link>
      { count < 10 && <button onClick={ add }>+</button>}
      { count > 0 && <button onClick={ subtract }>-</button>}
      <button onClick={ remove }>Remove</button>
    </li>
  )
}