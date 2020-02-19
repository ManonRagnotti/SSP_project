import React, { useState } from 'react';
import "antd/dist/antd.css";
import Carte from "../../components/VisitorCard/VisitorCard";
import PopUp from "../../components/ModalUser/ModalUser";


const Users = ({data, res}) => {

  const [showPopup, setShowPopup] = useState(false);

  return(
    <div className="visitorPage">
      <ul className="filter">
        <li>Paris</li>
        <li>93</li>
        <li>78/95</li>
        <li>92/94</li>
        <li>77/91</li>
      </ul>

      <div className="visitorsContainer">
        <h3>Salariés</h3>
        <button className="addNewVisitor">+ Ajouter</button>
      <div className="visitorCard">
          {(data && data.length) && data.map(v => (
            <div onClick={() => setShowPopup(!showPopup)}>
              <Carte data= {data} v={v}/>
          </div>
        ))}
        </div>
      </div>
      {showPopup ? <PopUp /> : null}

    </div>
  )
};


export default Users
