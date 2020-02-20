import React, {useState} from 'react';
import "antd/dist/antd.css";
import './Users.scss';
import Carte from "../../components/VisitorCard/VisitorCard";
import Modal from "../../components/ModalUser/ModalUser";

const Users = ({data, res, setRefresh}) => {

  const [showPopup, setShowPopup] = useState(false);

  return (<div className="visitorPage">
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
        {
          (data && data.length) && data.map((v, index) => (<div onClick={() => setShowPopup(!showPopup)} key={index}>
            <Carte data={data} v={v} setRefresh={setRefresh}/>
          </div>))
        }
      </div>
    </div>
    {
      showPopup
        ? <Modal onToggleModal={() => setShowPopup(!showPopup)}/>
        : null
    }

  </div>)
};

export default Users
