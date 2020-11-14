import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import React, { useState } from 'react'
import Canvas from "./components/Canvas";
import YellingGreeter from './components/YellingGreeter'
import CookieClicker from './components/CookieClicker';
import Movie from './components/Movie';
import Nav from './components/Nav';
import DynaForm from './components/DynaForm';
import Bitcoin from './components/Bitcoin';
import TipCal from './components/TipCal';
import ToDoList from './components/ToDoList';


const Home = () => {
  return(
  <div>
    <h1>Home Page</h1>
  </div>
  )
}


function App() {
  return (
    
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path="/yell" render={ props => <YellingGreeter message="test" />} />
            <Route path="/cookie" render={ props => <CookieClicker start_score="100"/>} />
            <Route path="/canvas" component={Canvas} />
            <Route path="/movie" component={Movie} />
            <Route path="/dynaform" component={DynaForm} />
            <Route path="/bitcoin" component={Bitcoin} />
            <Route path="/tipcal" component={TipCal} />
            <Route path="/todo" component={ToDoList} />
            
          </Switch>
        </div>
      </Router>
  );
}


export default App;
