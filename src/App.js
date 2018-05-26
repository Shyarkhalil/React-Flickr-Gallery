import React, { Component } from 'react';
import './App.css';
import Container from './Container';


import  {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import ErrorPage from './ErrorPage';



class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render= { () => (<Container />)} />
        <Route  path="/landscapes" render={ () => <Container  query="landscapes"/>} />
        <Route path="/wildlife" render={ () =><Container query="wildlife"/>  } />
        <Route path="/Kangal" render={ () =><Container query="kangal"/>  } />
        <Route  component={ErrorPage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
