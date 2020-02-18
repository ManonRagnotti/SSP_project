import React from 'react';
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import Carte from "../../components/VisitorCard/VisitorCard";



const Users = ({data, res}) => {
  return(
    <div className="visitorContainer">
      <div className="card paris">
        <h3>Secteur Paris</h3>
        <button className="addNewVisitor">+ Ajouter</button>
        <Carte data= {data.filter(visitor => visitor.area === "75")} />
      </div>
      <div className="card seine-Saint-Denis">
        <h3>Secteur 93</h3>
        <button className="addNewVisitor">+ Ajouter</button>
        <Carte data= {data.filter(visitor => visitor.area === "93")} />
      </div>
      <div className="card yvelines">
        <h3>Secteur 78/95</h3>
        <button className="addNewVisitor">+ Ajouter</button>
        <Carte data= {data.filter(visitor => visitor.area === "78-95")} />
      </div>
      <div className="card hauts-de-seine">
        <h3>Secteur 92/94</h3>
        <button className="addNewVisitor">+ Ajouter</button>
        <Carte data= {data.filter(visitor => visitor.area === "92-94")} />
      </div>
      <div className="card val-doise">
        <h3>Secteur 77/91</h3>
        <button className="addNewVisitor">+ Ajouter</button>
      <Carte data= {data.filter(visitor => visitor.area === "77-91")} />
      </div>
    </div>
  )
};


export default Users
