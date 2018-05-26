import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = props => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink  onClick={props.navigationHandle} to='/landscapes'>Landscapes</NavLink></li>
        <li><NavLink  onClick={props.navigationHandle} to='/wildlife'>Wildlife</NavLink></li>
        <li><NavLink  onClick={props.navigationHandle} to='/kangal'>Kangal</NavLink></li>

      </ul>
    </nav>
  )
}


export default Navigation;
