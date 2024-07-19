import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './layout';
import Home from './pages/home';
import Webprojects from './pages/webprojects';
import DesignProjects from './pages/designProjects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/webprojects" element={<Webprojects />} />
          <Route path="/designs" element={<DesignProjects />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
