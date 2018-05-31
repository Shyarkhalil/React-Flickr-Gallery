import React from 'react';

import ImgNotFound from './ImgNotFound';
import Imgs from './Imgs';





const ImgsContainer = props => {

// Store data in results so the data props passed to ImgsContainer component via container component.
  const results = props.data;
console.log(results);
  let flickrPhotos;
  // In the results.map method the function takes the parameter photo and returns the Imgs component.
  // We need to get the Photo Source URLs from Flickr API documentation.
  // To construct the source URL to a photo we need its ID, server ID, farm ID and secret, so we will get them by mapping to photo
  // object.

// Use url props to pass the data to Imgs component.
//useing conditional (ternary) operator,to make sure if photos are existed, will display img
// Else will render ImgNotFound component.
   (results.length > 0) ?
   flickrPhotos = results.map(photo =>
     <Imgs url={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg"} key={photo.id}/>
  ) : flickrPhotos = <ImgNotFound/>

//Render ImgsContainer to the DOM with className="photo-container".
// In the h2 formValue props passed from Container component.
// Render list of imgs by adding flickrPhotos variable within JSX Expressions{} Inside ul.
  return(
    <div className="photo-container">
      <h2>{props.formValue}</h2>
      <ul>
        {flickrPhotos}
      </ul>
    </div>
  )
}

export default ImgsContainer;
