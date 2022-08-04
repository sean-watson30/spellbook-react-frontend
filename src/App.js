import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
// _____Services________
import { auth } from './services/firebase';
// _____Components________
import Header from './components/Header'
import Bookmark from './components/Bookmark';
import Footer from './components/Footer'
import Create from './components/Create'
import Memorize from './components/Memorize';
// _____Pages________
import Show from  './pages/Show'


function App() {
  // _______Setting State____________ //
  const [ user, setUser ] = useState(null);
  const [ charClass, setCharClass ] = useState(null) // for adding priest/psionicist
  const [ spells, setSpells ] = useState(null);
  const [ spellLevel, setSpellLevel ] = useState(null);
  // const [ memorizedSpells, setMemorizedSpells ] = useState([])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => {
      unsubscribe();
    }
  }, []);
  
  const URL = 'http://localhost:4000/wizSpells/' // needs to be a heroku link eventually
  
  const getSpells = async () => {
    // const token = await user.getIdToken();
    // console.log(token)
    const response = await fetch(URL, {
      method: 'GET',
      // headers: {
      //   'Authorization': 'Bearer ' + token
      // }
    });
    const data = await response.json();
    // console.log(data)
    setSpells(data)
  }
  
  useEffect(() => {
    getSpells()
  }, [user]);
  
  // ________CRUD Functions___________ //

  const createSpell = async (spell) => { 
    if (!user) return;
    const token = await user.getIdToken();
    await fetch(URL, { 
      method: 'POST',
      headers: { 
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(spell)
      }); 
    getSpells();
  };
        
  const updateSpell = async (updatedSpell, id) => {
    // console.log(user.email)
    if (!user) return;
    const token = await user.getIdToken();
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(updatedSpell)
    });
    getSpells();
    // console.log(updatedSpell)
  }
        
  const deleteSpell = async (id) => {
    if (!user) return;
    const token = await user.getIdToken();
    await fetch(URL + id, { 
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }); 
    getSpells(); 
  };
  
  // ________Event Handlers___________ //

  const handleLevelClick = (event) => {
    setSpellLevel(event.target.innerText)
    // console.log(spellLevel)
    // console.log(event.target.innerText)
  }
  const setNull = (event) => {
    setSpellLevel(null)
  }

  // const onAdd = (e, id) => {
  //   // console.log(id)
  //   // setMemorizedSpells(id)
  //   const spellArr = spells.filter((spell) => spell._id === id);
  //   // console.log(spellArr)
  //   setMemorizedSpells(spellArr) 
  // };

  return (
    <div className="App">
      <div className='content'>
          <Bookmark
            spells={spells} 
            spellLevel={spellLevel}
          />
        <div className='mainBody'>
          <Header 
            user={user}
            handleLevelClick={handleLevelClick}
            spellLevel={spellLevel}
            setNull={setNull}
            charClass={charClass}
          />
          <div className='middleContent'>
          { spellLevel === null 
            ? 
              <Create 
              createSpell={createSpell}
              user={user}
              /> 
            : 
              <Route path='/:id' render={(rp) => (
                <Show 
                  user={user}
                  spells={spells}
                  {...rp}
                  updateSpell={updateSpell}
                  deleteSpell={deleteSpell}
                  // onAdd={onAdd} 
                  />
                )}>
              </Route> 
          }
          <div className='memorize'>
            <Memorize 
              // onAdd={onAdd} 
              // memorizedSpells={memorizedSpells}
            />
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
