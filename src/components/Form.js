import React from "react";



export default function Form({ handleChange, handleSubmit, form }) {

  // const inputs = [ 'level', 'name', 'school', 'range', 'duration', 'aoe', 'components', 'casting', 'saving' ]
  // const inputMap = inputs.map(input => {
  //   let val = ( form.input )
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

  return (
    <form className='createForm' onSubmit={ handleSubmit }>
      {/* { inputMap } */}
      <input 
        value={ form.level } 
        onChange={ handleChange }
        name='level'
        placeholder="level"
        type="text" 
      />
      <br />
      <input 
        value={ form.name } 
        onChange={ handleChange }
        name='name'
        placeholder='name'
        type="text" 
      />
      <br />
      <input 
        value={ form.school } 
        onChange={ handleChange }
        name='school'
        placeholder='school'
        type="text" 
      />
      <br />
      <input 
        value={ form.range } 
        onChange={ handleChange }
        name='range'
        placeholder="range"
        type="text" 
      />
      <br />
      <input 
        value={ form.duration } 
        onChange={ handleChange }
        name='duration'
        placeholder="duration"
        type="text" 
      />
      <br />
      <input 
        value={ form.aoe } 
        onChange={ handleChange }
        name='aoe'
        placeholder="area of effect"
        type="text" 
      />
      <br />
      <input 
        value={ form.components } 
        onChange={ handleChange }
        name='components'
        placeholder="components"
        type="text" 
      />
      <br />
      <input 
        value={ form.casting } 
        onChange={ handleChange }
        name='casting'
        placeholder="casting time"
        type="text" 
      />
      <br />
      <input 
         value={ form.saving } 
        onChange={ handleChange }
        name='saving'
        placeholder="saving throw"
        type="text" 
      />
      <br />
      <textarea 
        value={ form.description }
        onChange={ handleChange }
        name="description" 
        cols="30" 
        rows="10"
      />
      <br />
      <input type="submit" value='Transcribe Spell' />
    </form>
  )
}