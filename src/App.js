import React from 'react';
import Nav from "./components/Nav"
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div>
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
    </div>
  );
}

export default App;
