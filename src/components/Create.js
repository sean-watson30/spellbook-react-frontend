import React, { useState } from "react";
// import Form from "./Form";

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

  // console.log(charClass)
  // if (charClass === 'Wizard') {
  //   console.log('Wizard')
  // } else if (charClass === 'Priest') { 
  //   console.log('Priest') 
  // } else {
  //   console.log('empty')
  // }

  let URL = ''

  const createSpell = async (spell) => { 
    if (!user) return;
    const token = await user.getIdToken();
    if (charClass === 'Wizard') {
      URL = 'https://spellbook2.herokuapp.com/wizSpells/'
    } else if (charClass === 'Priest') {
      URL = 'https://spellbook2.herokuapp.com/priSpells/'
    } 
    // console.log(URL)
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
      { user
        ?
        <>
          <h2 className="glowConst">Transcribe a New { charClass } Spell</h2>

          {/* <Form 
            form={ newForm }
            setForm={ setNewForm }
            createWizSpell={ props.createWizSpell }
            createPriSpell={ props.createPriSpell }
            charClass={ charClass }
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
          /> */}

          <form className='createForm' onSubmit={ handleSubmit }>

          <input 
            value={ newForm.level } 
            onChange={ handleChange }
            name='level'
            placeholder="level"
            type="text" 
          />
          <br />
          <input 
            value={ newForm.name } 
            onChange={ handleChange }
            name='name'
            placeholder='name'
            type="text" 
          />
          <br />
          <input 
            value={ newForm.school } 
            onChange={ handleChange }
            name='school'
            placeholder='school'
            type="text" 
          />
          <br />
          <input 
            value={ newForm.range } 
            onChange={ handleChange }
            name='range'
            placeholder="range"
            type="text" 
          />
          <br />
          <input 
            value={ newForm.duration } 
            onChange={ handleChange }
            name='duration'
            placeholder="duration"
            type="text" 
          />
          <br />
          <input 
            value={ newForm.aoe } 
            onChange={ handleChange }
            name='aoe'
            placeholder="area of effect"
            type="text" 
          />
          <br />
          <input 
            value={ newForm.components } 
            onChange={ handleChange }
            name='components'
            placeholder="components"
            type="text" 
          />
          <br />
          <input 
            value={ newForm.casting } 
            onChange={ handleChange }
            name='casting'
            placeholder="casting time"
            type="text" 
          />
          <br />
          <input 
            value={ newForm.saving } 
            onChange={ handleChange }
            name='saving'
            placeholder="saving throw"
            type="text" 
          />
          <br />
          <textarea 
            value={ newForm.description }
            onChange={ handleChange }
            name="description" 
            cols="30" 
            rows="10"
          />
          <br />
          <input type="submit" value='Transcribe Spell' />
        </form>
        </>
        :
        <h1 id="welcome">Welcome to the Dungeons {`&`} Dragons (2e) Spellbook!</h1>
      }
    </section>
  )
};

export default Create;