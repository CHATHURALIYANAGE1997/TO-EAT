import React from 'react';
import { BrowserRouter, BrowserRouter as Routes, Route } from 'react-router-dom';
import { Switch as Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <div className="text-center">
            <Switch>
      
            </Switch>  
          </div>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
