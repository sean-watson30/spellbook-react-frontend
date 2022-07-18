// import React from "react";
// import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom';
// import Show from "../pages/Show";
// // import Create from "./Create";

// const List = ({ spells, spellLevel, URL , getSpells }) => {
//   console.log(spells)
  // const loaded = () => {
  //   return spells.map(spell => {
  //     if (spell.level === `${spellLevel}`) {
  //       return (
  //         <li key={spell._id}>
  //           <Link to={`/${spell._id}`}>
  //             {spell.name}
  //           </Link>
  //         </li> 
  //       )
  //     }
  //   })
  // }

  // const loading = () => {
  //   return <h3>Searching the pages....</h3>
  // }

//   const updateSpell = async (updatedSpell, id) => {
//     await fetch(URL + id, {
//       method: 'PUT',
//       headers: {
//         'Content-type': 'Application/json'
//       },
//       body: JSON.stringify(updatedSpell)
//     });
//     getSpells();
//     // console.log(updatedSpell)
//   }
  
//   const deleteSpell = async (id) => {
//     await fetch(URL + id, { method: 'DELETE' }); 
//     getSpells(); 
//   };

//   return (
//     <div className="list">
      // <section>
      //   <h2>Level {spellLevel} Spells</h2>
      //   { spells ? <ul style={ {textAlign: 'left'} }>{loaded()}</ul> : <ul>{loading()}</ul> }
      // </section>
      // <Route path='/:id' render={(rp) => (
      //   <Show 
      //   spells={spells}
      //   {...rp}
      //   updateSpell={updateSpell}
      //   deleteSpell={deleteSpell}
      //   />
      //   )}>
      // </Route>
//     </div>
//   )
// }

// export default List;