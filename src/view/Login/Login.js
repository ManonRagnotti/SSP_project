import React from 'react';
import './Login.scss';
import "antd/dist/antd.css";
import { Switch } from 'antd';
import {Link} from "react-router-dom";
const Login = ({values, setValues, handleSubmit}) => {
  const {email,password} = values
    return(
        <section className="login">
            <div className="login-left">
                <div className="login-icon">
                    <img alt="" className="login-icon-mainLogo" src={require('../../assets/img/logo-ssp.png')}></img>
                </div>
            </div>
            <div className="login-right">
                <h1>Vous êtes :</h1>
                <div className="login-switch">
                    <span>Planificateur</span> <Switch className="login-switch-btn" defaultChecked /> <span>Intervenant</span>
                </div>
                <form className="login-form">
                    <input
                        type="text"
                        name="first_name"
                        className="login-form_input mail"
                        placeholder="Adresse email"
                        value={email}
                        onChange={e=> setValues({...values,email: e.target.value})}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="login-form_input password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={e=> setValues({...values,password: e.target.value})}
                        required
                        />
                    <input type="submit" className="login-form_submit" value="Valider" />
                </form>
            </div>
        </section>
    )
};
export default Login