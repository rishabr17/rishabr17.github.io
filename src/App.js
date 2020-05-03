import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App" style={{}}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/'> {/* Default Page */}
            <Homepage />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
