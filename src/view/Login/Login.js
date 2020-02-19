import React from 'react';
import './Login.scss';
import "antd/dist/antd.css";
import { Switch } from 'antd';
import {Link} from "react-router-dom";
const Login = ({values, setValues, handleSubmit}) => {
  const {first_name, last_name, email,password} = values
    return(
        <section className="login">
            <div className="login-left">
            </div>
            <div className="login-right">
                <h1>Vous êtes :</h1>
                <span>Planificateur</span> <Switch defaultChecked /> <span>Intervenant</span>
                <form className="login-form">
                    <input
                        type="text"
                        name="first_name"
                        className="login-form_input mail"
                        placeholder="Prénom"
                        value={first_name}
                        onChange={e=> setValues({...values,first_name: e.target.value})}
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