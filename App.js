import './App.css';
//import Welcom from './componentes/welcome'
import React from 'react';
import Login from './componentes/Login';
import Student from './componentes/students';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateStudent from 'componentes/CreateStudent';



function App() {
  return (
    <Router>
      <Switch>
        <Route path ="/login" component={Login}>
    <Login/>
    </Route>
    <Route path ="/students" component={Student}>
    <Student/>
    </Route>
    <Route path ="/createStudent" component={CreateStudent}>
      <CreateStudent/>
    </Route>
    </Switch>
    </Router>
);
 

}

export default App;
