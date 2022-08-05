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
  const [ pathURL, setPathURL ] = useState('wizSpells');
  // const [ memorizedSpells, setMemorizedSpells ] = useState([])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user));
    return () => {
      unsubscribe();
    }
  }, []);


  // const URL = 'http://localhost:4000/wizSpells/' // needs to be a heroku link eventually
  const URL = `http://localhost:4000/${pathURL}/` // needs to be a heroku link eventually

  const getWizSpells = async () => {
    const token = await user.getIdToken();
    setPathURL('wizSpells')
    const wizURL = 'http://localhost:4000/wizSpells/'
    const response = await fetch(wizURL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    setSpells(data)
  }
  const getPriSpells = async () => {
    const token = await user.getIdToken();
    setPathURL('priSpells')
    const priURL = 'http://localhost:4000/priSpells/'
    const response = await fetch(priURL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
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
  
  // useEffect(() => {
  //   getPriSpells()
  //   getWizSpells()
  //   // getSpells()
  // }, [user]);
  
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
    getWizSpells();
    getPriSpells();
    // getSpells();
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
            // selectURL={selectURL}
            getPriSpells={getPriSpells}
            getWizSpells={getWizSpells}
            spellLevel={spellLevel}
            // charClass={charClass}
            />
        <div className='mainBody'>
          <Header 
            user={user}
            getPriSpells={getPriSpells}
            getWizSpells={getWizSpells}
            // selectURL={selectURL}
            // getPriSpells={getPriSpells}
            // getWizSpells={getWizSpells}
            // handleClassClick={handleClassClick}
            handleLevelClick={handleLevelClick}
            spellLevel={spellLevel}
            setNull={setNull}
            // charClass={charClass}
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
