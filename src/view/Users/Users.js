import React from 'react';
import "antd/dist/antd.css";
import Carte from "../../components/VisitorCard/VisitorCard";

const Users = ({data, res}) => {
  return(
    <div className="visitorContainer">
      <div className="card paris">
        <h3>Salariés</h3>
        <button className="addNewVisitor">+ Ajouter</button>
        <Carte data= {data.filter(visitor => visitor.area === "75")} />
      </div>
    </div>
  )
};


export default Users
