import React from 'react';
import Nav from "./containers/Nav"
import Router from './Router'
import { BrowserRouter } from 'react-router-dom'
import { Provider} from 'react-redux'
import store from "./redux/store"


function App() {
  return (
    <div>
    <BrowserRouter>
      <Provider store ={store}>
        <Nav />
        <Router />
      </Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
