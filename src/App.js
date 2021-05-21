import './App.css';
import React from 'react'
import {
  Route, BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import LogInPage from './LogInPage';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LogInPage}/>
          <Route exact path="/home" component={HomePage}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
