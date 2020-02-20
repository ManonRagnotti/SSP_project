import React,{ useState } from 'react';
import './Login.scss';
import "antd/dist/antd.css";
import {useHistory} from 'react-router-dom'
import { getFileItem } from 'antd/lib/upload/utils';

const Login = ({ login }) => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const history = useHistory()

  console.log(setEmail, setPassword)
  const handleSubmit = (e)=>{
      e.preventDefault();
      login(email, password)
    history.push('/planning')

  }

    return(
        <section className="login">
            <div className="login-left">
                <div className="login-icon">
                    <img alt="" className="login-icon-mainLogo" src={require('../../assets/img/logo-ssp.png')}></img>
                </div>
            </div>
            <div className="login-right">
                <h1>Connectez-vous :</h1>
                {/* <div className="login-switch">
                    <span>Planificateur</span> <Switch className="login-switch-btn" defaultChecked /> <span>Intervenant</span>
                </div> */}
                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="first_name"
                        className="login-form_input mail"
                        placeholder="Adresse email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        className="login-form_input password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={e=> setPassword(e.target.value)}
                        required
                        />
                    <input type="submit" className="login-form_submit" value="Valider" />
                </form>
            </div>
        </section>
    )
};
export default Login