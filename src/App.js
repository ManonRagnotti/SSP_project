import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as AppRouter, Route} from "react-router-dom";
import RegisterContainer from "./view/Register/RegisterContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <AppRouter>
              <div>slt c la home page</div>
              <Route path="/register" component={RegisterContainer} />
              {/*<Route path="/login" component={LoginContainer} />*/}
          </AppRouter>
      </header>
      <footer>
        <p>SAMU SOCIAL PROJECT © 2020 - Projet réalisé par Manon, Mehdi, Enzo, Léa, Eugénie, Angeline</p>
      </footer>
    </div>
  );
}

export default App;
