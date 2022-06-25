import { useState, useEffect } from "react";
// import { Route } from 'react-router-dom';

// ________Page Components_________//
import List from "./List";
import Create from "../components/Create";

const Bookmark = (props) => {
  const [ spells, setSpells ] = useState(null);

  const URL = 'http://localhost:4000/wizSpells/'

  const getSpells = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    // console.log(data)
    setSpells(data)
  }

  useEffect(() => {
    getSpells()
  }, []);

  const createSpell = async (spell) => { 
    await fetch(URL, { 
      method: 'POST',
      headers: { 
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(spell)
    }); 
    getSpells();
  };

  const [ spellLevel, setSpellLevel ] = useState(null);
  const handleClick = (event) => {
    setSpellLevel(event.target.innerText)
    // console.log(spellLevel)
    // console.log(event.target.innerText)
  }
  const setNull = (event) => {
    setSpellLevel(null)
  }

  return(
    <main className="main">
      <aside className="bookmark">
          <ul>
            <li onClick={setNull}>Spells by Level</li>
            <li onClick={handleClick}>1</li>
            <li onClick={handleClick}>2</li>
            <li onClick={handleClick}>3</li>
            <li onClick={handleClick}>4</li>
            <li onClick={handleClick}>5</li>
            <li onClick={handleClick}>6</li>
            <li onClick={handleClick}>7</li>
            <li onClick={handleClick}>8</li>
            <li onClick={handleClick}>9</li>
          </ul>
        </aside>
   
        <div>
          { spellLevel === null 
            ? <Create 
              createSpell={createSpell}
              />
            : <List 
              spellLevel={spellLevel} 
              spells={spells}
              URL={URL}
              getSpells={getSpells}
            />
          }
        </div>
    </main>
  )
}
export default Bookmark;