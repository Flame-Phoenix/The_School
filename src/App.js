import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,withRouter} from 'react-router-dom';
import Home from './Components/Home';
import NavBar from './Components/NavBar';

const MyRoute = withRouter( ({location})=>{
  return( 
    <>
    <Route path='/' component={NavBar}/>
    <Route path='/' component={Home}/>
    </>
  );

});

const App = () => {
  return (
    <Router>
    <MyRoute />
    </Router>
  );
}

export default App;
