// import { useState, useEffect } from "react";
// import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'

// ________Page Components_________//
// import List from "./List";
// import Create from "../components/Create";

// const Bookmark = ({ spells, spellLevel }) => {
const Bookmark = ({ spells, spellLevel, getPriSpells, getWizSpells }) => {
// const Bookmark = ({ user, spellLevel }) => {
  // const [ spells, setSpells ] = useState(null)

  // const getWizSpells = async () => {
  //   const token = await user.getIdToken();
  //   const wizURL = 'http://localhost:4000/wizSpells/'
  //   const response = await fetch(wizURL, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   });
  //   const data = await response.json();
  //   setSpells(data)
  //   console.log(data)
  // }
  // const getPriSpells = async () => {
  //   const token = await user.getIdToken();
  //   const priURL = 'http://localhost:4000/priSpells/'
  //   const response = await fetch(priURL, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   });
  //   const data = await response.json();
  //   setSpells(data)
  //   console.log(data)
  // }

  const loaded = () => {
    spells.sort((a, b) => a.name.localeCompare(b.name))
    return spells.map(spell => {
      if (spell.level === `${spellLevel}`) {
        return (
          <li className='wGlow' key={spell._id}>
            <Link to={`/${spell._id}`}>
              {spell.name}
            </Link>
          </li> 
        )
      }
    })
  }

  const loading = () => {
    return <h3>Searching the pages....</h3>
  }

  return(
//     <main className="main">
      <aside className="bookmark">
        {/* <Link to='/'>
          <span onClick={getWizSpells}>Wizard</span>
        </Link>
        <Link to='/'>
          <span onClick={getPriSpells}>Priest</span>
        </Link> */}
        <section>
          { spellLevel
            ? <h3>Level {spellLevel} Spells</h3>
            : <h3>Select Spell Level</h3>
          }
          { spells 
            ? <ul className='listDisplay' style={ {textAlign: 'left'} }>{loaded()}</ul>
            : <ul>{loading()}</ul> 
          }
        </section>
        </aside>
  )
}
export default Bookmark;