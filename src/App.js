import React from 'react';
import './App.css'
import Nav from "./components/Nav"
// import Listings from "./components/Listings"
// import Details from "./components/Details"
// import Login from "./components/Login"
import AddListing from "./components/AddListing"

function App() {
  return (
    <div>
      <Nav />
      {/* <Listings /> */}
      {/* <Details /> */}
      {/* <Login /> */}
      <AddListing />
    </div>
  );
}

export default App;
