import React from "react";

export default function Form({ handleChange, handleSubmit, form, editForm }) {
 
  const inputs = [
    { name: 'level', value: form.level, placeholder: 'level' },
    { name: 'name', value: form.name, placeholder: 'name' },
    { name: 'school', value: form.school, placeholder: 'school' },
    { name: 'range', value: form.range, placeholder: 'range' },
    { name: 'duration', value: form.duration, placeholder: 'duration' },
    { name: 'aoe', value: form.aoe, placeholder: 'area of effect' },
    { name: 'components', value: form.components, placeholder: 'components' },
    { name: 'casting', value: form.casting, placeholder: 'casting time' },
    { name: 'saving', value: form.saving, placeholder: 'saving throw' },
  ]
  
  const inputMap = inputs.map(input => {
    const { name, value, placeholder } = input
    return (
      <input 
        value={ value } 
        onChange={ handleChange }
        name={ name }
        placeholder={ placeholder }
        type="text" 
      />  
    )
  })

  return (
    <form className='createForm' onSubmit={ handleSubmit }>
      { inputMap }
      <textarea 
        value={ form.description }
        onChange={ handleChange }
        name="description" 
        cols="30" 
        rows="10"
      />
      <br />
      {
        editForm 
        ? <input type="submit" value='Update Spell' /> 
        : <input type="submit" value='Transcribe Spell' />
      }
    </form>
  )
}