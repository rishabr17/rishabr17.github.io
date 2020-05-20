import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import PreviewLinkJS from './Components/PreviewLinkJS'

function App() {
  return (
    <div className="App" style={{}}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={'/preview-link-js'}>
            <PreviewLinkJS />
          </Route>
          <Route path=''> {/* Default Page */}
            <Navbar />
            <Homepage />
            <Education />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
