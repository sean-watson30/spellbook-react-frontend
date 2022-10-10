import React, { useState } from "react";
import Form from "../Form";

const Create = ({ user, charClass, getWizSpells, getPriSpells }) => {
  const [ newForm, setNewForm ] = useState({
    level: '',
    name: '',
    school: '',
    range: '',
    duration: '',
    aoe: '',
    components: '',
    casting: '',
    saving: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target
    setNewForm({
      ...newForm, [ name ]: value
    });
  };

  let URL = ''

  const createSpell = async (spell) => { 
    if (!user) return;
    const token = await user.getIdToken();
    if (charClass === 'Wizard') {
      URL = 'https://spellbook2.herokuapp.com/wizSpells/'
    } else if (charClass === 'Priest') {
      URL = 'https://spellbook2.herokuapp.com/priSpells/'
    } 
    await fetch(URL, { 
      method: 'POST',
      headers: { 
          'Content-type': 'Application/json',
          'Authorization': 'Bearer ' + token
        },
      body: JSON.stringify(spell)
      }); 
      console.log(spell)
    getWizSpells();
    getPriSpells();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createSpell(newForm);
    // props.history.push('/');
  }

  return (
    <section className="create">
      { user && charClass
        ?
        <>
          <h2 className="glowConst">Transcribe a New { charClass } Spell</h2>
          <Form 
            form={ newForm }
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            charClass={ charClass }
          />
        </>
        :
        <h1 id="welcome">Welcome to the Dungeons {`&`} Dragons (2e) Spellbook!</h1>
      }
    </section>
  )
};

export default Create;