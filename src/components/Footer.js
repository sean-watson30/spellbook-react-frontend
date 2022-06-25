import React from "react";
import { Link } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import Create from "./Create";

const Footer = () => {
  return (
    <div className="footer">
      <h4>©️ 2022 Sean Watson | 
        <Link to='https://www.linkedin.com/in/sean-watson-080091220/'> LinkedIn </Link> | 
        <Link to='https://github.com/sean-watson30'> GitHub </Link> | 
        <Link to=''> Portfolio </Link>
      </h4>
      {/* <Link to='/'>Create New Spell</Link> */}
      {/* <Route path='/'>
          {/* <Create /> */}
      {/* </Route> */}
    </div>
  )
}

export default Footer;