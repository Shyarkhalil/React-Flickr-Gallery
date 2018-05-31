import React from 'react';

// This component is only responsible for rendering an img element wrapped in the list item.
const Imgs = props => {
// passing the data from ImgsContainer component via the URL props.
  return (
    <li>
      <img src={props.url} alt="" />
    </li>
  )
}


export default Imgs;
