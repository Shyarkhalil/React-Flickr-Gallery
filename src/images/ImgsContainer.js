import React from 'react';

import ImgNotFound from './ImgNotFound';
import Imgs from './Imgs';





const ImgsContainer = props => {


  const results = props.data;


  let flickrPhotos;
   (results.length > 0) ?
   flickrPhotos = results.map(photo =>
     <Imgs url={"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_m.jpg"} key={photo.id}/>
  ) : flickrPhotos = <ImgNotFound/>


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
