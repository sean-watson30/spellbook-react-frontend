import { useState } from  'react';
import Form from '../components/Form';

const Show = ( props ) => {
  const id = props.match.params.id;
  const spell = props.spells.find(s => s._id === id);
  const [ editForm, setEditForm ] = useState(spell);
  
  let URL = ''

  const updateSpell = async (updatedSpell, id) => {
    if (!props.user) return;
    const token = await props.user.getIdToken();
    if (props.charClass === 'Wizard') {
      URL = 'https://spellbook2.herokuapp.com/wizSpells/'
    } else if (props.charClass === 'Priest') {
      URL = 'https://spellbook2.herokuapp.com/priSpells/'
    } 
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        'Content-type': 'Application/json',
        'Authorization': 'Bearer ' + token
      },
      body: JSON.stringify(updatedSpell)
    });
    props.getWizSpells();
    props.getPriSpells();
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setEditForm({
      ...editForm,
      [ name ]: value
      // [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { level, name, school, range, components, duration, casting, aoe, saving, description, _id } = editForm
    updateSpell({ level, name, school, range, components, duration, casting, aoe, saving, description }, _id) 
    props.history.push('/');
  };

  const handleRemoveSpell = (id) => {
    props.deleteSpell(id);
    props.history.push('/');
  }

  function handleMemorize() {
    props.setMemorizedSpells( prevMemorize => {
      return [ ...prevMemorize, spell ]
    })
  }

  return (
    <main className='spellShow'>
      <h1>{ spell.name }</h1>
      <div className='sub-title'>
        <h4>( { spell.school } )</h4>
        <button id='memorize-btn' onClick={ handleMemorize }>Memorize</button>
      </div>


      <table className='showTable'>
        <tbody>
          <tr>
            <td><b>Range:</b></td>
            <td className='table-row-data'>{ spell.range }</td>
          </tr>
          <tr>
            <td><b>Duration:</b></td>
            <td>{ spell.duration }</td>
          </tr>
          <tr>
            <td><b>Area of Effect:</b></td>
            <td>{ spell.aoe }</td>
          </tr>
          <tr>
            <td><b>Components:</b></td>
            <td>{ spell.components }</td>
          </tr>
          <tr>
            <td><b>Casting Time:</b></td>
            <td>{ spell.casting }</td>
          </tr>
          <tr>
            <td><b>Saving Throw:</b></td>
            <td>{ spell.saving }</td>
          </tr>
        </tbody>
      </table>

      <p className='spellDescription'>{ spell.description }</p>
      { props.user && 
        props.user.email === 'sean_watson30@me.com' 
      ? <>
          <Form 
            handleChange={ handleChange } 
            handleSubmit={ handleSubmit }
            form={ editForm }
            editForm={ true }
            charClass={ props.charClass }
          />
          <button onClick={() => handleRemoveSpell(spell._id)}>Delete This Spell</button>
        </>
      : <></>
    }
    </main>
  )
}

export default Show;