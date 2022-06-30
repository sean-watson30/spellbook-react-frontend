import React from "react";
import { useState } from 'react';

const Create = (props) => {
  const [ newForm, setNewForm ] = useState({
    level: '',
    name: '',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createSpell(newForm);
    props.history.push('/');
  }

  return (
    <section className="create">
      {/* { props.user && */}
      <h2 className="glowConst">Transcribe a New Spell</h2>
      <form className='createForm' onSubmit={handleSubmit}>

        <input 
          value={newForm.level} 
          onChange={handleChange}
          name='level'
          placeholder="level"
          type="text" 
        />
        <br />
        <input 
          value={newForm.name} 
          onChange={handleChange}
          name='name'
          placeholder='name'
          type="text" 
        />
        <br />
        <input 
          value={newForm.range} 
          onChange={handleChange}
          name='range'
          placeholder="range"
          type="text" 
        />
        <br />
        <input 
          value={newForm.duration} 
          onChange={handleChange}
          name='duration'
          placeholder="duration"
          type="text" 
        />
        <br />
        <input 
          value={newForm.aoe} 
          onChange={handleChange}
          name='aoe'
          placeholder="area of effect"
          type="text" 
        />
        <br />
        <input 
          value={newForm.components} 
          onChange={handleChange}
          name='components'
          placeholder="components"
          type="text" 
        />
        <br />
        <input 
          value={newForm.casting} 
          onChange={handleChange}
          name='casting'
          placeholder="casting time"
          type="text" 
        />
        <br />
        <input 
          value={newForm.saving} 
          onChange={handleChange}
          name='saving'
          placeholder="saving throw"
          type="text" 
        />
        <br />
        <textarea 
          value={newForm.description}
          onChange={handleChange}
          name="description" 
          cols="30" 
          rows="10">
        </textarea>
        <br />
        <input type="submit" value='Transcribe Spell' />

      </form>
      {/* } */}
    </section>
  )
};

export default Create;