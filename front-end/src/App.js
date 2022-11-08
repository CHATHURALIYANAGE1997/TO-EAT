import React from 'react';
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom';
import { Switch as Switch } from 'react-router-dom';
import Login from './pages/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <div className="text-center">
            <Switch>
              <Route path="/" exact component={Login}></Route>
              <Route path="/login" component={Login}></Route>
            </Switch>  
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
