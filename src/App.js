import './App.css';
import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {
  Route, BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import LogInPage from './LogInPage';
import HomePage from './HomePage';
import Form from './Form';
import SignUp from './FormSignup'
firebase.initializeApp({
  apiKey: "AIzaSyAV40zQ0xsYXsloi1BGVfzXfB9oSv6mbds",
    authDomain: "playlists-app-62f6e.firebaseapp.com",
    projectId: "playlists-app-62f6e",
    storageBucket: "playlists-app-62f6e.appspot.com",
    messagingSenderId: "84283044118",
    appId: "1:84283044118:web:fca25f9d635ccab6e8e037",
    measurementId: "G-FPKKWZ0V6T"
})

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Form}/>
          <Route exact path="/home" component={HomePage}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
