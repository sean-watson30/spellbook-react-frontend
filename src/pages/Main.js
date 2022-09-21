import React, { useState } from "react";
import { Route } from "react-router-dom";
// _____Components________
import Header from "../components/Header";
import Bookmark from "../components/Bookmark";
import Create from "../components/Create";
import Memorize from "../components/Memorize";
import Footer from "../components/Footer";
// _____Pages________
import Show from "./Show";

const Main = (props) => {
  const [ charClass, setCharClass ] = useState('')
  const [ memorizedSpells, setMemorizedSpells ] = useState([])

  
  return (
    <div className="App">
      <Header 
        user={ props.user }
        getPriSpells={ props.getPriSpells }
        getWizSpells={ props.getWizSpells }
        handleLevelClick={ props.handleLevelClick }
        spellLevel={ props.spellLevel }
        setNull={ props.setNull }
        charClass={ charClass }
        setCharClass={ setCharClass }
      />
      <div className='content'>
        <div className='mainBody'>
          <div className='middleContent'>
            <Bookmark
              spells={ props.spells} 
              user={ props.user}
              getPriSpells={ props.getPriSpells }
              getWizSpells={ props.getWizSpells }
              spellLevel={ props.spellLevel }
              charClass={ charClass }
              />
            { props.spellLevel === '' 
              ? <Create 
                  createWizSpell={ props.createWizSpell }
                  createPriSpell={ props.createPriSpell }
                  user={ props.user }
                /> 
              : <Route path='/:id' render={(rp) => (
                  <Show 
                    user={ props.user }
                    spells={ props.spells }
                    { ...rp }
                    updateSpell={ props.updateSpell }
                    deleteSpell={ props.deleteSpell }
                    memorizedSpells={ memorizedSpells }
                    setMemorizedSpells={ setMemorizedSpells }
                  />
                  )}>
                </Route> 
            }
            <div className='memorize'>
              <Memorize 
                memorizedSpells={ memorizedSpells } 
                setMemorizedSpells={ setMemorizedSpells }
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main