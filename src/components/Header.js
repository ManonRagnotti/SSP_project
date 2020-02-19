import React from 'react';
import {
    NavLink
} from "react-router-dom";


const Header = () => {
        return(
            <header className="header">
                <div className="header-container">
                    <div className="header-icon">
                        <img alt="" className="header-icon-mainLogo" src={require('../assets/img/logo-ssp.png')}></img>
                    </div>
                    <div className="header-link-container">
                    <NavLink activeClassName="header-is-active" className="header-link" to="/planning">Planning</NavLink>
                    <NavLink activeClassName="header-is-active" className="header-link" to="/users">Salarié</NavLink>
                    <NavLink activeClassName="header-is-active" className="header-link" to="/hotels">Hôtel</NavLink>
                    <NavLink activeClassName="header-is-active" className="header-link" to="/cars">Véhicules</NavLink>
                    </div>
                    <div className="header-profilContainer">
                    <div className="header-profilPicture"></div>
                    <div className="header-profilInfo">
                        <span className="header-userName">Mme Hamid</span>
                        <span className="header-userRoles">Admin</span>
                    </div>
                    </div>

                </div>
            </header>
        )
    
};

export default Header;
