import React, { Component } from 'react';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";




const Register = () => {
    return(
        <section className="register">
            <div className="register-container">
                <h2 className="register-title">Inscription</h2>
                <form className="register-form" >
                    <div className="register-form_top">
                        <input
                            type="text"
                            name="first_name"
                            className="input-text"
                            placeholder="Prénom"
                            // value={state.first_name}
                            required
                        />
                        <input
                            type="text"
                            name="last_name"
                            className="input-text"
                            placeholder="Nom"
                            // value={state.last_name}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Adresse e-mail"
                        // value={state.email}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="input-text"
                        placeholder="Mot de passe"
                        // value={state.password}
                        required
                    />
                    <input type="submit" value="S'inscrire" />
                </form>
                <Link to="/login" >J'ai déjà un compte</Link>
            </div>
        </section>
    )
};



export default Register
