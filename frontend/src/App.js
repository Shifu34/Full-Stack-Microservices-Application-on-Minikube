// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from 'D:\\MLOps\\Full-Stack-Microservices-Application-on-Minikube\\frontend\\src\\components\\login';
import Signup from 'D:\\MLOps\\Full-Stack-Microservices-Application-on-Minikube\\frontend\\src\\components\\Signup';
import ForgotPassword from 'D:\\MLOps\\Full-Stack-Microservices-Application-on-Minikube\\frontend\\src\\components\\ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Login</Link> | <Link to="/signup">Signup</Link> | <Link to="/forgot-password">Forgot Password</Link>
        </nav>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;