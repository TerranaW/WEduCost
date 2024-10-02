import React from 'react';
import Calculator from './Components/Calculator';
import PageTemplate from './Components/PageTemplate';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageTemplate />}>
          <Route path="/calc" element={<Calculator />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;