import { Link } from 'react-router-dom'

const Bookmark = ({ spells, spellLevel, charClass }) => {
  
  const loaded = () => {
    spells.sort((a, b) => {
      return (a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    })
    
    // spells.sort((a, b) => a.name.localeCompare(b.name))
    return spells.map(spell => {
      if (spell.level === `${spellLevel}`) {
        return (
          <li className='glow' key={spell._id}>
            <Link to={`/${spell._id}`}>
              {spell.name}
            </Link>
          </li> 
        )
      }
    })
  }

  const loading = () => {
    return <h3>Searching the pages....</h3>
  }

  return(
    <aside className="bookmark">
      <section>
        { spellLevel
          ? <h3>Level { spellLevel } { charClass } Spells</h3>
          : <h3>Select Class &amp; Spell Level</h3>
        }
        { spells 
          ? <ul className='listDisplay' style={ {textAlign: 'left'} }>{ loaded() }</ul>
          : <ul>{ loading() }</ul> 
        }
      </section>
    </aside>
  )
}
export default Bookmark;