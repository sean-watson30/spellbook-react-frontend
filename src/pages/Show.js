import { useState } from  'react';

const Show = ( props ) => {
  // console.log(props.memorizedSpells)
  const id = props.match.params.id;
  const spell = props.spells.find(s => s._id === id);
  
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

  function handleMemorize() {
    props.setMemorizedSpells( prevMemorize => {
      // console.log(prevMemorize)
      return [ ...prevMemorize, spell ]
    })
  }

  return (
    <main className='spellShow'>
      <h1>{spell.name}</h1>
      <h3>( {spell.school} )</h3>
   
      <button onClick={ handleMemorize }>Memorize</button>

      <table className='showTable'>
        <tbody>
          <tr>
            <td><b>Range: </b>{spell.range}</td>
            <td><b>Components:  </b>{spell.components}</td>
          </tr>

          <tr>
            <td><b>Duration: </b>{spell.duration}</td>
            <td><b>Casting Time: </b>{spell.casting}</td>
          </tr>

          <tr>
            <td><b>Area of Effect: </b>{spell.aoe}</td>
            <td><b>Saving Throw: </b>{spell.saving}</td>
          </tr>
        </tbody>
      </table>

      <p className='spellDescription'>{spell.description}</p>
      { props.user && 
        props.user.email === 'sean_watson30@me.com' 
      ?
      <div>
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
            value={editForm.school} 
            onChange={handleChange}
            name='school'
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
            rows="10"
          />
          <br />
          <input type="submit" value='Update Spell' />

        </form>
        <button onClick={() => handleRemoveSpell(spell._id)}>Delete This Spell</button>
      </div>
      : 
      <></>
      }
    </main>
  )
}

export default Show;