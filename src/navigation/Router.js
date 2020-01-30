import {BrowserRouter as AppRouter, Route} from "react-router-dom";
import React from "react";
import RegisterContainer from "../view/Register/RegisterContainer";
import UsersContainer from "../view/Users/UsersContainer";
import CarsContainer from "../view/Cars/CarsContainer";


const Router = () => {
    return(
        <AppRouter>
            <div>
                <header>
                    <AppRouter>
                        <div>slt c la home page</div>
                        <Route path="/register" component={RegisterContainer} />
                        <Route path="/users" component={UsersContainer} />
                        <Route path="/cars" component={CarsContainer} />
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
