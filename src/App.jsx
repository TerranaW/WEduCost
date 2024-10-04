import React from 'react';
import Calculator from './Components/Calculator';
import CariDana from './Components/CariDana';
import PageTemplate from './Components/PageTemplate';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import TemplateBefore from './Components/TemplateBefore';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TemplateBefore />}>
          <Route index element={<LandingPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route element={<PageTemplate />}>
          <Route path="/home" element={<LandingPage />} />
          <Route path="/calc" element={<Calculator />} />
          <Route path="/dana" element={<CariDana />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;