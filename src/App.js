import './styles/App.css';
import React from 'react'
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Signup from "./components/FormSignup"
import HomePage from "./components/HomePage"
import Login from "./components/FormLogin"
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={HomePage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
          <Route path="/forgot-password" component={ForgotPassword}/>
        </Switch>
      </AuthProvider>

    </Router>

      
    
  )
  // return (
  //   <AuthProvider>
  //     <Router>
  //       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
  //       <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
  //       <div className="App">
  //         <Switch>
  //           <Route exact path='/' component={SignUp}/>
  //           <Route exact path="/home" component={HomePage}/>
  //         </Switch>
  //       </div>
  //     </Router>
  //   </AuthProvider>
    
  // );
}

export default App;
