import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Objeto from './pages/Objeto';
import Sobre from './pages/Sobre';
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rastrear/:codigoRastreio" component={Objeto} />
        </Switch>
        <Sobre/>
    </BrowserRouter>
);

export default Routes;