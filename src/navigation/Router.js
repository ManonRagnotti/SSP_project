import {BrowserRouter as AppRouter, Route} from "react-router-dom";
import React from "react";
import RegisterContainer from "../view/Register/RegisterContainer";
import Header from "../components/Header";


const Router = () => {
    return(
        <AppRouter>
            <div>
                <header>
                    <Header/>
                    <AppRouter>
                        <div>slt c la home page</div>
                        <Route path="/register" component={RegisterContainer} />
                        {/*<Route path="/login" component={LoginContainer} />*/}
                    </AppRouter>
                </header>
                <footer className="footer">
                    <p className="footer-text">SAMU SOCIAL PROJECT © 2020 - Projet réalisé par Manon, Mehdi, Enzo, Léa, Eugénie, Angeline et Fabien</p>
                </footer>
            </div>
        </AppRouter>
    )
};

export default Router