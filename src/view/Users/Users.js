import React from 'react';
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import Carte from "../../components/VisitorCard/VisitorCard";



const Users = ({data, res}) => {
  // const visitors = data

  return(
    <div>
      <div className="card paris">
        <h3>75</h3>
        <Carte data= {data.filter(visitor => visitor.area === "75")} />
      </div>
      <div className="card yvelines">
        <Carte data= {data.filter(visitor => visitor.area === "78-95")} />
      </div>
    </div>
  )
};


export default Users
