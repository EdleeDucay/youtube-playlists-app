import './styles/App.css';
import React from 'react'
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Signup from "./components/FormSignup"
import HomePage from "./components/HomePage"
import Login from "./components/FormLogin"
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword'
import MyPlaylists from './components/MyPlaylists'

function App() {
  return (

    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage}/>
          <PrivateRoute path="/my-playlists" component={MyPlaylists}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
        </Switch>
      </AuthProvider>

    </Router>

      
    
  )
  
}

export default App;
