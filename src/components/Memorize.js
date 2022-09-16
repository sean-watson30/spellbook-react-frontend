import React, { useState } from 'react'

const Memorize = ({ memorizedSpells, onAdd }) => {
  // console.log(memorizedSpells)
  const [ count, setCount ] = useState()

  function add() {
    setCount(prevCount => prevCount + 1)
  }
  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div id='memorize' className='memorized'>
      {/* <h3>Memorize</h3> */}
      {/* bring in PreppedSpells component what collects spells selected form book*/}
      {/* in that component, use add() and subtract() functions for each spell */}
      
    </div>
  )
}

export default Memorize

// set state in another parent component as:

// const [ memorizedSpells, setMemorizedSpells ] = useState([])

// use an empty array to initialize. Then on spell Show pages, have the button element and use a callback function using previous state as default and 

// <button onClick={ setMemorizedSpells(prevMemorizeArray => {
  // return [...prevMemorizeArray, `${spell.name}`]
// }) }>Memorize</button>

// this should take the rest(...) of the existing array and add in the spell.name to the list. We might also wanna look into adding in the Link to it, so from the Memorize component, they can link to the Show component and get the spell details. 


// ...could also look into using an object as state for memorize...something like:

// useState({
//   spellName: '',
//   memorized: 0,
// })

// ...something like that, but an array may be better / easier and just use increment logic for the number memorized.