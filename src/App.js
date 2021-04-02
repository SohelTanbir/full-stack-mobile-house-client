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
import MangeProduct from './components/ManageProduct/MangeProduct';
import AddProduct from './components/AddProduct/AddProduct';


export const  userContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <PrivateRoute path="/order">
          <Order/>
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <Admin/>
        </PrivateRoute>
        <Route path="/login">
          <Login/>
        </Route>
        <PrivateRoute path="/checkout/:id">
        <CheckOut/>
        </PrivateRoute>
        <Route path="/manage">
          <MangeProduct/>
        </Route>
        <Route path="/addproduct">
          <AddProduct/>
        </Route>
        <Route path="/manageproduct">
          <MangeProduct/>
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
