import React from 'react';
import './Register.scss';

import "antd/dist/antd.css";
import {Link} from "react-router-dom";


const Register = ({values, setValues, handleSubmit}) => {
  const {first_name, last_name, email,password} = values
    return(
        <section className="register">
            <div className="register-left">
                <div className="register-icon">
                    <img alt="" className="register-icon-mainLogo" src={require('../../assets/img/logo-ssp.png')}></img>
                </div>
            </div>
            <div className="register-right">
                <h1 className="register-title">Inscription</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="first_name"
                            className="register-form_input name"
                            placeholder="Prénom"
                            value={first_name}
                            onChange={e=> setValues({...values,first_name: e.target.value})}
                            required
                        />
                        <input
                            type="text"
                            name="last_name"
                            className="register-form_input lastname"
                            placeholder="Nom"
                            value={last_name}
                            onChange={e=> setValues({...values,last_name: e.target.value})}
                            required
                        />
                    <input
                        type="email"
                        name="email"
                        className="register-form_input mail"
                        placeholder="Adresse e-mail"
                        value={email}
                        onChange={e=> setValues({...values,email: e.target.value})}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="register-form_input password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={e=> setValues({...values,password: e.target.value})}
                        required
                    />
                  <input type="submit" className="register-form_submit" value="S'inscrire" />
                  <Link to="/login" className="rgister-form_link"  >J'ai déjà un compte</Link>
                </form>

            </div>
        </section>
    )
};



export default Register
