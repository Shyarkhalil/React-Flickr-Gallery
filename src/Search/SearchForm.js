import React from 'react';

class SearchForm extends React.Component {


// The searchText state get updated in onSearchChange function.
   state = {
        searchText: ''
      }

// In onSearchChange function searchText get updated when user type in the search filed.
// onSearchChange is called via onChange method.
  onSearchChange = e => {
   this.setState({searchText: e.target.value});
  }


// The handleSubmit function is called when the form is submitted.
// Use reset() method to clear the form fild from the current text.
// Inside handleSubmit function will call onSearch method.
// performSearch takes one argument (query) so we need to pass it to onSearch method.
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

//Use ref attribute to access value of the input filed to searchText.
//ref attribute allaws us to refrence or direct access to the dom element.
//The ref attribute takes a callback function. A callback function will excuted immediately after the component mounted to the dom.
//When the input is rendered onto the page, the callback function will return a reference to the input which you can access with
// this.query
  render(){
    return (
      <form className="search-form"
      onSubmit={this.handleSubmit}
      >
        <input type="search"
        onChange={this.onSearchChange}
        ref={(input) => this.query = input}
        name="search"
        placeholder="Search"
        required/>
        <button type="submit" className="search-button">
          <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </button>
      </form>
    )

  }
}

export default SearchForm;
