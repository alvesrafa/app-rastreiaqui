import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Objeto from './pages/Objeto';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/rastrear/:codigoRastreio" component={Objeto} />
        </Switch>
    </BrowserRouter>
);

export default Routes;