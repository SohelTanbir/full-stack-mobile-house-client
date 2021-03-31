import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Order from './components/Order/Order';
import Admin from './components/Admin/Admin';
import CheckOut from './components/CheckOut/CheckOut';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';


export const  userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  console.log(loggedInUser)
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <h6>Email: {loggedInUser.email}</h6>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/order">
          <Order/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute>
        <CheckOut/>
        </PrivateRoute>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
