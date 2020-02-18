import {BrowserRouter as AppRouter, Route} from "react-router-dom";
import React from "react";
import RegisterContainer from "../view/Register/RegisterContainer";
import Header from "../components/Header";
import UsersContainer from "../view/Users/UsersContainer";
import CarsContainer from "../view/Cars/CarsContainer";
import HotelsContainer from "../view/Hotels/HotelsContainer";


const Router = () => {
    return(
        <AppRouter>
            <div className="app">
                <header>
                    <Header/>
                    <AppRouter>
                        <Route path="/register" component={RegisterContainer} />
                        <Route path="/salaried" component={UsersContainer} />
                        <Route path="/hotels" component={HotelsContainer} />
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
