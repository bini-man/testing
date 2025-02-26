import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login'; // Your Login component
import Extractor from './Extractor';
// import OtherPage from './OtherPage'; // Your other page component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/extractor" element={<Extractor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;