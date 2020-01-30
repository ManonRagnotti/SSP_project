import React from 'react';
import "antd/dist/antd.css";
import {Link} from "react-router-dom";
import { Table, Divider, Tag } from 'antd';




const Cars = ({data, res}) => {

  return(
    <div className="cars">
      <h2>Véhicules</h2>
      <button>Ajouter</button>
      <ul>
        {
          (data && data.length)
          && data.map (
            c => {
              return (
                <li className="car">
                  <span className="carType">{c.carType}</span>
                  <span className="registration">{c.registration}</span>
                  <div className="car-edit">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </li>
              )
            }
          )
        }
      </ul>
    </div>

  )

};


export default Cars
