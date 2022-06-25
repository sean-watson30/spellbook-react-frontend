import { useState } from  'react';

const Show = ( props ) => {
  console.log(props)
  console.log(props.match.params.id)
  const id = props.match.params.id;
  console.log(id)
  const spell = props.spells.find(s => s._id === id);
  // console.log(spell)
  
  const [ editForm, setEditForm ] = useState(spell);
  const handleChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { level, name, school, range, components, duration, casting, aoe, saving, description, _id } = editForm
    props.updateSpell({ level, name, school, range, components, duration, casting, aoe, saving, description }, _id) 
    props.history.push('/');
  };

  const handleRemoveSpell = (id) => {
    props.deleteSpell(id);
    props.history.push('/');
  }


  return (
    <div className='spellDescription'>
      <h1>{spell.name}</h1>
      <h3>({spell.school})</h3>
      
      <table>
        <tbody>
          <tr>
            <td>Range: {spell.range}</td>
            <td>Components: {spell.components}</td>
          </tr>

          <tr>
            <td>Duration: {spell.duration}</td>
            <td>Casting Time: {spell.casting}</td>
          </tr>

          <tr>
            <td>Area of Effect: {spell.aoe}</td>
            <td>Saving Throw: {spell.saving}</td>
          </tr>
        </tbody>
      </table>

      <p>{spell.description}</p>

      <form onSubmit={handleSubmit}>

        <input 
          value={editForm.level} 
          onChange={handleChange}
          name='level'
          type="text" 
        />
        <br />
        <input 
          value={editForm.name} 
          onChange={handleChange}
          name='name'
          type="text" 
        />
        <br />
        <input 
          value={editForm.range} 
          onChange={handleChange}
          name='range'
          type="text" 
        />
        <br />
        <input 
          value={editForm.duration} 
          onChange={handleChange}
          name='duration'
          type="text" 
        />
        <br />
        <input 
          value={editForm.aoe} 
          onChange={handleChange}
          name='aoe'
          type="text" 
        />
        <br />
        <input 
          value={editForm.components} 
          onChange={handleChange}
          name='components'
          type="text" 
        />
        <br />
        <input 
          value={editForm.casting} 
          onChange={handleChange}
          name='casting'
          type="text" 
        />
        <br />
        <input 
          value={editForm.saving} 
          onChange={handleChange}
          name='saving'
          type="text" 
        />
        <br />
        <textarea 
          value={editForm.description}
          onChange={handleChange}
          name="description" 
          cols="30" 
          rows="10">
        </textarea>
        <br />
        <input type="submit" value='Update Spell' />

      </form>
      <button onClick={() => handleRemoveSpell(spell._id)}>Delete This Spell</button>
    </div>
  )
}

export default Show;