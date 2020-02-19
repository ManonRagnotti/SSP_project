import React from 'react';
import './modalUser.scss';

export default ( {data, onToggleModal} ) => {
  return (
    <div className="modalUserContainer">
      <div className="modalUser">
        <div className="close" onClick={onToggleModal}>
          <img alt="" className="icon-close" src={require('../../assets/img/close.svg')}></img>
        </div>

        <div className="right">
          <div className="avatar">
            <img alt="" className="avatar" src={require('../../assets/img/img-profil.svg')}></img>
          </div>
          <h2>Patricia Dupont</h2>
          <span className="secteur">Secteur 93</span>
          <div className="infos">
            <a href="mailto:patricia.dupont@samusocial.com">patricia.dupont@samusocial.com</a>
            <a href="tel:+491570156">+49 157 0156</a>
          <span className="address">27 Rue du Progrès <br></br>93 100 MONTREUIL</span>
          </div>
          <div className="button">
            <button className="modify">Modifier</button>
            <button className="delete">Supprimer</button>
          </div>
        </div>

        <div className="left">
          <h2>Indisponibilités</h2>
          <div className="rubrique cp">
            <h3>Congés Payés</h3>
            <div className="list">
              <p>Du 08/01 au 14/01</p>
              <div className="trash">
                <img alt="" className="icon-trash" src={require('../../assets/img/trash.svg')}></img>
              </div>
            </div>
            <button className="addNew">+ Ajouter</button>
          </div>

          <div className="rubrique arrets">
            <h3>Arrêts maladie</h3>
            <div className="list">
              <p>Aucun</p>
            </div>
            <button className="addNew">+ Ajouter</button>
          </div>

          <div className="rubrique rtt">
            <h3>RTT</h3>
            <div className="list">
              <p>27/02</p>
              <div className="trash">
                <img alt="" className="icon-trash" src={require('../../assets/img/trash.svg')}></img>
              </div>
            </div>
            <div className="list">
              <p>06/03</p>
              <div className="trash">
                <img alt="" className="icon-trash" src={require('../../assets/img/trash.svg')}></img>
              </div>
            </div>
            <button className="addNew">+ Ajouter</button>
          </div>

      </div>

    </div>
  </div>
)
}
