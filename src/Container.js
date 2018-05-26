import React from 'react';
import axios from 'axios';
import apiKey from './Config.js';



import Navigation from './Navigation/Navigation';
import SearchForm from './Search/SearchForm';
import ImgsContainer from './images/ImgsContainer';
import Loading from './Loading';





class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      flickrPhotos: [],
      loading: true,
      searchValue: ''
    };

  }


  componentDidMount() {
    this.performSearch(this.props.query);
  }


 performSearch = (query = "BMW CAR") => {
   axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
     .then(response => {
       this.setState({
          flickrPhotos: response.data.photos.photo,
          loading: false
       });
     })
     .catch(error => {
       console.log('Error fetching and parsing data', error);
     });
     this.setState({
       searchValue: query,
       loading: true
     });

 }

 // To get text from navigation buttons
     navigationHandle = e => {
       this.performSearch(this.query = e.target.textContent);
       this.setState({
         loading: true
       });
       console.log(e.target.textContent);
     };

  render() {
    console.log(this.state.flickrPhotos);

    return (
        <div className="Container">
           <SearchForm onSearch={this.performSearch}/>
           <Navigation navigationHandle = {this.navigationHandle}/>
           {
             (this.state.loading)
             ? <Loading/>
             : <ImgsContainer data={this.state.flickrPhotos}  formValue= {this.state.searchValue}/>
           }
        </div>
    );
  }
}


export default Container;
