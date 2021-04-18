import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Home/Header/Header';
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound.js';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceList from './components/Dashboard/Admin/ServiceList/ServiceList';
import AddService from './components/Dashboard/Admin/AddService/AddService';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageService from './components/Dashboard/Admin/ManageService/ManageService';
import AddReview from './components/Dashboard/User/AddReview/AddReview';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import OrderedList from './components/Dashboard/User/OrderedList/OrderedList';
import Checkout from './components/Dashboard/User/Checkout/Checkout';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/header">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/serviceList">
            <ServiceList></ServiceList>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/orderedList">
            <OrderedList></OrderedList>
          </Route>
          {/* <PrivateRoute path="/checkout/:id">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute> */}
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
