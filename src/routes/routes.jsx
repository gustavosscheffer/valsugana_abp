import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import CadastroDancarino from '../pages/cadastroDancarino';
import CadastroPessoaFisica from '../pages/cadastroPessoaFisica';
import Dancarinos from '../pages/dancarinos';
import Home from '../pages/home';
import Login from "../pages/login";
import PessoasFisicas from '../pages/pessoasFisicas';

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/PessoasFisicas">
                        <PessoasFisicas/>
                    </Route>
                    <Route path="/CadastroPessoaFisica">
                        <CadastroPessoaFisica/>
                    </Route>
                    <Route path="/Dancarinos">
                        <Dancarinos/>
                    </Route>
                    <Route path="/CadastroDancarino">
                        <CadastroDancarino/>
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

