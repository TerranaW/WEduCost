import React from 'react';
import Calculator from './Components/Calculator';
import CariDana from './Components/CariDana';
import PageTemplate from './Components/PageTemplate';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route index element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/dana" element={<CariDana />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;