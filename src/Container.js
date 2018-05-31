import React from 'react';
import axios from 'axios';
import apiKey from './Config.js';



import Navigation from './Navigation/Navigation';
import SearchForm from './Search/SearchForm';
import ImgsContainer from './images/ImgsContainer';
import Loading from './Loading';



class Container extends React.Component {

//The constructor method is called when an instance of a component is being created and inserted into the DOM:
// So we achieve two purposes with the constructor function:
//1- Set the initial state of the component.
//2- Point the global context of (this) keyword. We need to make this as a global application pointer on which we can call the props
// and state methods. Otherwise won't longer work as a global class object, will point all the properties inside that called
//function
// super() is called inside a react component only if it has a constructor, so super() is mandatory. Otherwise, this.props will be
//undefined in the constructor, which can lead to bugs.
  constructor() {
    super();
    this.state = {
  //FlickrPhotos represent a collection of objects will change and be updated by component.
      flickrPhotos: [],
  // Assigning true boolean value to loading to run loading component each time when photos are loaded.
      loading: true,
  // searchValue assigned to empty string, so will be updated as first time from query when the DOM is mounted, then will be updated
  // when performSearch method invoked.
      searchValue: ''
    };
  }




  // componentDidMount is a lifecycle method, invoked (called) immediately after the DOM is mounted(or loaded) and calls
  // performSearch() as callback method.

  // The (this) keyword refers to Container component.

  componentDidMount() {
    this.performSearch(this.props.query);
  }

// Promise
 performSearch = (query = "BMW CAR") => {
// Using axios promise based library to preform request via get method.
// Passing get URL from https://www.flickr.com/services/apps/create/apply/
// Chaining then method, so the arrow function in the (then) gets excuted once the get request is fulfilled.
// The catch method will handle any error.
// Passing Flickr API key can request data from the Flickr API
// Use Template literals `` instead of string "" around url to embed the value of query using interpolation ${}.
   axios.get(` https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=12&format=json&nojsoncallback=1`)
     .then(response => {
  //axios automatically returns transforms for JSON data.
  //  FlickrPhotos will get updated from the response.
       this.setState({
          flickrPhotos: response.data.photos.photo,
          loading: false
       });
     })
     .catch(error => {
       console.log('Error fetching and parsing data', error);
     });
     this.setState({
    // searchValue is updated from query when the DOM is mounted.
       searchValue: query,
       loading: true
     });

 }


     navigationHandle = e => {
// Query parameter will be updated from SearchForm when performSearch invoked by onSearch function.
// Query parameter will be updated from Navigation when navigationHandle invoked by navigationHandle function.
// So the searchValue will be updated from query.
       this.performSearch(this.query = e.target.textContent);
       this.setState({
         loading: true
       });
       console.log(e.target.textContent);
     };

//Render Container div to the DOM with classname Container.
  render() {
    console.log(this.state.flickrPhotos);
// In the SearchForm component onSearch function will call performSearch.
// In the Navigation component navigationHandle function will call navigationHandle.
    return (
        <div className="Container">
           <SearchForm onSearch={this.performSearch}/>
           <Navigation navigationHandle = {this.navigationHandle}/>
           {
    // useing conditional (ternary) operator that takes three operands, if loading is true, will display
    // Loading gif img
    // Else will render ImgsContainer component
    //In react component talk to each other via props, so in the ImgsContainer the prop of data will pass flickrPhotos
    // state(data array)to the ImgsContainer component.
    // formValue prop will also pass searchValue state to ImgsContainer component.
             (this.state.loading)
             ? <Loading/>
             : <ImgsContainer data={this.state.flickrPhotos}  formValue= {this.state.searchValue}/>
           }
        </div>
    );
  }
}


export default Container;
