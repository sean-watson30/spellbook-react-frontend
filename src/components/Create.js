import React, { useState } from "react";
// import Form from "./Form";

// const Create = (props) => {
const Create = ({ user, charClass, getWizSpells, getPriSpells }) => {
  // const [ charClass, setCharClass ] = useState()
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
    setNewForm({
      ...newForm,
      [event.target.name]: event.target.value
    });
  };

  // const handleClass = (event) => {
  //   setCharClass(event.target.innerText)
  // }

  // console.log(charClass)
  // if (charClass === 'Wizard') {
  //   console.log('Wizard')
  // } else if (charClass === 'Priest') { 
  //   console.log('Priest') 
  // } else {
  //   console.log('empty')
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // props.createSpell(newForm);
  //   if (charClass === 'Wizard') {
  //     props.createWizSpell(newForm);
  //   } else {
  //     props.createPriSpell(newForm);
  //   }
  //   props.history.push('/');
  // }

  // const inputs = [ newForm.level, newForm.school, newForm.range, newForm.duration, newForm.aoe, newForm.components, newForm.casting, newForm.saving ]
  // const inputMap = inputs.map(input => {
  //   let val = Function(`newForm.${input}`)
  //   console.log(val)
  //   return (
  //     <input 
  //       value={ val } 
  //       onChange={ handleChange }
  //       name={ input }
  //       placeholder={ input }
  //       type="text" 
  //     />  
  //   )
  // })
  let URL = ''

  const createSpell = async (spell) => { 
    if (!user) return;
     const token = await user.getIdToken();
    if (charClass === 'Wizard') {
      URL = 'https://spellbook2.herokuapp.com/wizSpells/'
    } else if (charClass === 'Priest') {
      URL = 'https://spellbook2.herokuapp.com/priSpells/'
    } 
    console.log(URL)
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
      {/* { props.user */}
      { user
        ?
        <>
          <h2 className="glowConst">Transcribe a New { charClass } Spell</h2>
          <ul>
            {/* <li className="create-wiz" onClick={ handleClass }>Wizard</li>
            <li>|</li>
            <li className="create-pri" onClick={ handleClass }>Priest</li> */}
          </ul>

          {/* <Form 
            form={ newForm }
            setForm={ setNewForm }
            createWizSpell={ props.createWizSpell }
            createPriSpell={ props.createPriSpell }
            charClass={ charClass }
          /> */}

          <form className='createForm' onSubmit={ handleSubmit }>
          {/* <form className='createForm'> */}

            {/* { inputMap } */}
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