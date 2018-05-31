import React from 'react';
import {NavLink} from 'react-router-dom';

//For navigating between routes and give user a visual feedback(When clicking one of  nav buttom will display active navigation link)
// Will use the NavLink component instead of anchor element a.
// Replace the href attribute with the (to) attribute.
// The value for (to) attribute should match the path defined for the route in App.js.
// For example the landscape it should be /landscape as the path url in the App.js component.
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
