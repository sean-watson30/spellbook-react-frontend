import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
// _____Services________
import { auth } from './services/firebase';
// _____Components________

// _____Pages________
import Main from './pages/Main';


function App() {
  // _______Setting State____________ //
  const [ user, setUser ] = useState({});
  const [ spells, setSpells ] = useState([]);
  const [ spellLevel, setSpellLevel ] = useState('');
  const [ pathURL, setPathURL ] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => {
      unsubscribe();
    }
  }, []);

  // const URL = `http://localhost:4000/${pathURL}/`
  const URL = `https://spellbook2.herokuapp.com/${pathURL}/`

  const getWizSpells = async () => {
    // const token = await user.getIdToken();
    setPathURL('wizSpells')
    // const wizURL = 'http://localhost:4000/wizSpells/'
    const wizURL = 'https://spellbook2.herokuapp.com/wizSpells/'
    const response = await fetch(wizURL, {
      // mode: 'no-cors',
      method: 'GET',
      // headers: {
      //   'Authorization': 'Bearer ' + token
      // }
    });
    const data = await response.json();
    setSpells(data)
  }
  const getPriSpells = async () => {
    // const token = await user.getIdToken();
    setPathURL('priSpells')
    // const priURL = 'http://localhost:4000/priSpells/'
    const priURL = 'https://spellbook2.herokuapp.com/priSpells/'
    const response = await fetch(priURL, {
      // mode: 'no-cors',
      method: 'GET',
      // headers: {
      //   'Authorization': 'Bearer ' + token
      // }
    });
    const data = await response.json();
    setSpells(data)
  }
  
  useEffect(() => {
    getPriSpells()
    getWizSpells()
  }, [user]);
  
  // ________CRUD Functions___________ //
        
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
    getWizSpells();
    getPriSpells();
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
    getWizSpells(); 
    getPriSpells(); 
    // getSpells(); 
  };
  
  // ________Event Handlers___________ //

  const handleLevelClick = (event) => {
    setSpellLevel(event.target.innerText)
  }

  const setNull = (event) => {
    setSpellLevel('')
  }

  return (
    <Main
      user={user}
      getPriSpells={getPriSpells}
      getWizSpells={getWizSpells}
      handleLevelClick={handleLevelClick}
      spellLevel={spellLevel}
      setNull={setNull}
      spells={spells} 
      updateSpell={updateSpell}
      deleteSpell={deleteSpell}
    />
  );
}

export default App;
