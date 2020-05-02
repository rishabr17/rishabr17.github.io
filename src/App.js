import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Education from './Components/Education'

function App() {
  return (
    <div className="App" style={{}}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/'> {/* Default Page */}
            <Homepage />
            <Education />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
