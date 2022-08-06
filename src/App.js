import { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
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
  const [ spells, setSpells ] = useState(null);
  const [ spellLevel, setSpellLevel ] = useState(null);
  const [ pathURL, setPathURL ] = useState(null);
  // const [ memorizedSpells, setMemorizedSpells ] = useState([])

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
      method: 'GET',
      // headers: {
      //   'Authorization': 'Bearer ' + token
      // }
    });
    const data = await response.json();
    setSpells(data)
  }

  // const getSpells = async () => {
  //   const token = await user.getIdToken();
  //   // console.log(URL)
  //   const response = await fetch(URL, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': 'Bearer ' + token
  //     }
  //   });
  //   const data = await response.json();
  //   setSpells(data)
  // }
  
  useEffect(() => {
    getPriSpells()
    getWizSpells()
    // getSpells()
  }, [user]);
  
  // ________CRUD Functions___________ //

  const createWizSpell = async (spell) => { 
    if (!user) return;
    // const token = await user.getIdToken();
    // const wizURL = 'http://localhost:4000/wizSpells/'
    const wizURL = 'https://spellbook2.herokuapp.com/wizSpells/'
    await fetch(wizURL, { 
      method: 'POST',
      headers: { 
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(spell)
      }); 
    getWizSpells();
  };
  const createPriSpell = async (spell) => { 
    if (!user) return;
    const token = await user.getIdToken();
    // const priURL = 'http://localhost:4000/priSpells/'
    const priURL = 'https://spellbook2.herokuapp.com/priSpells/'
    await fetch(priURL, { 
      method: 'POST',
      headers: { 
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(spell)
      }); 
    getPriSpells();
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
    getWizSpells();
    getPriSpells();
    // getSpells();
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
    setSpellLevel(null)
  }

  return (
    <div className="App">
      <div className='content'>
          <Bookmark
            spells={spells} 
            user={user}
            getPriSpells={getPriSpells}
            getWizSpells={getWizSpells}
            spellLevel={spellLevel}
            />
        <div className='mainBody'>
          <Header 
            user={user}
            getPriSpells={getPriSpells}
            getWizSpells={getWizSpells}
            handleLevelClick={handleLevelClick}
            spellLevel={spellLevel}
            setNull={setNull}
          />
          <div className='middleContent'>
          { spellLevel === null 
            ? 
              <Create 
              createWizSpell={createWizSpell}
              createPriSpell={createPriSpell}
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
                />
                )}>
              </Route> 
          }
          <div className='memorize'>
            <Memorize 
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
