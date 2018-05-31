import React, { Component } from 'react';
import './App.css';
import Container from './Container';

// Import Router objects from React-Router-Dom
// React Router Dom provides two components: BrowserRouter: the root routing component(App.js), that keeps UI in sync with URL
// Route is responsible for rendering a component in the app, when the URL matches its path.
// Path prop indicates the URL to match.
// Component prop specifies which react component to render when the URL matches the route path.
// To render the Container component use forward slash / for the path.
// To avoid the router considering, that the route forward slash route of container is the same as the forward slash of other
// component we will use the exact prop to the Container route so will render the component only when it is forward slash /.

import  {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


import ErrorPage from './ErrorPage';



class App extends Component {
// Import ErrorPage giving users visual feedback when they visit a URL doesn't match any of the route maps.
// Use React Router's switch component, to render the ErrorPage component only when the URL does not match a path.
// Use render property to return the Container component and pass it query prop and assign it with a value.
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render= { () => (<Container />)} />
        <Route path="/landscapes" render={ () => <Container  query="landscapes"/>} />
        <Route path="/wildlife" render={ () =><Container query="wildlife"/>  } />
        <Route path="/Kangal" render={ () =><Container query="kangal"/>  } />
        <Route  component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
