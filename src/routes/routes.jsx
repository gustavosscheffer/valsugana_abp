import React from "react";
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from '../pages/home'
import Login from "../pages/login";

export default function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/PessoasFisicas">
                        <Home />
                    </Route>
                    <Route path="/Dancarinos">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

