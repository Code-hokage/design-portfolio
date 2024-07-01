import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './layout';
import Home from './pages/home';
import Designs from './pages/designs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="designs" element={<Designs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
