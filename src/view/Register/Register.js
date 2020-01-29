import React from 'react';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import {Link} from "react-router-dom";




const Register = ({values, setValues, handleSubmit}) => {
  const {first_name, last_name, email,password} = values
    return(
        <section className="register">
            <div className="register-container">
                <h2 className="register-title">Inscription</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="register-form_top">
                        <input
                            type="text"
                            name="first_name"
                            className="input-text"
                            placeholder="Prénom"
                            value={first_name}
                            onChange={e=> setValues({...values,first_name: e.target.value})}
                            required
                        />
                        <input
                            type="text"
                            name="last_name"
                            className="input-text"
                            placeholder="Nom"
                            value={last_name}
                            onChange={e=> setValues({...values,last_name: e.target.value})}
                            required
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        className="input-text"
                        placeholder="Adresse e-mail"
                        value={email}
                        onChange={e=> setValues({...values,email: e.target.value})}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="input-text"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={e=> setValues({...values,password: e.target.value})}
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
