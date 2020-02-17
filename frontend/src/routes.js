import React from 'react';
import {BrowserRouter,Switch,Route, Link} from 'react-router-dom';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import App from './App';
import logo from './logo.png';

export default function Router() {
  return (
    <BrowserRouter>
    <header>
      <ul>
        <li><Link to="/"><img src={logo} width="60" alt="logo rastreiaqui"/></Link></li>
        <ul>
          
          <li><Link to="/contato">Contato</Link></li>
        </ul>
      </ul>
    </header>
    <Switch>
      <Route exact path="/">
        <App/>
      </Route>
      <Route path="/contato">
        <Contato />
      </Route>

    </Switch>
    </BrowserRouter>
  )
}