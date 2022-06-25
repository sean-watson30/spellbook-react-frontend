import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
// _____Services________
// import { auth } from './services/firebase';
// _____Components________
import Header from './components/Header'
import Bookmark from './components/Bookmark';
import Footer from './components/Footer'
import Create from './components/Create'
// _____Pages________
import Show from  './pages/Show'


function App() {
  // const [ charClass, setCharClass ] = useState(null) // for adding priest/psionicist
  const [ spells, setSpells ] = useState(null);
  const [ spellLevel, setSpellLevel ] = useState(null);
  
  const URL = 'http://localhost:4000/wizSpells/' // needs to be a heroku link eventually
  
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
        
  const updateSpell = async (updatedSpell, id) => {
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(updatedSpell)
    });
    getSpells();
    // console.log(updatedSpell)
  }
        
  const deleteSpell = async (id) => {
    await fetch(URL + id, { method: 'DELETE' }); 
    getSpells(); 
  };
        
  const handleLevelClick = (event) => {
    setSpellLevel(event.target.innerText)
    // console.log(spellLevel)
    // console.log(event.target.innerText)
  }
  const setNull = (event) => {
    setSpellLevel(null)
  }

  return (
    <div className="App">
      <div className='content'>
        <Bookmark
          spells={spells} 
          spellLevel={spellLevel}
        />
        <div className='mainBody'>
          <Header 
            handleLevelClick={handleLevelClick}
            spellLevel={spellLevel}
            setNull={setNull}
          />
          { spellLevel === null 
            ? <Create 
              createSpell={createSpell}
              />
            : 
          <Route path='/:id' render={(rp) => (
            <Show 
            spells={spells}
            {...rp}
            updateSpell={updateSpell}
            deleteSpell={deleteSpell}
            />
            )}>
          </Route> 
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
