import React from 'react';
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom';
import { Switch as Switch } from 'react-router-dom';
import Login from './pages/Login'
import Signup from './pages/Signup'
import Welcomepage from './pages/Welcomepage'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <div className="text-center">
            <Switch>
              <Route path="/" exact component={Welcomepage}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/sigin" component={Login}></Route>
              <Route path="/signup" component={Signup}></Route>
              <Route path="/wellcome" component={Welcomepage}></Route>
            </Switch>  
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
