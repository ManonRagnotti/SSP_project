import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Hotels.scss';
import { Table, Button } from 'antd';
import Carte from "../../components/HotelCard/HotelCard";




const Hotels = ({data, res}) => {


    return (
      <div className="hotelsContainer">
        <ul>
          <li>Paris</li>
          <li>93</li>
          <li>78/95</li>
          <li>92/94</li>
          <li>77/91</li>

        </ul>
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Adresse</th>
              <th>Notation</th>
              <th>Dernière date de visite</th>
            </tr>
          </thead>

          <Carte data={data} />

        </table>


      </div>
    );

}
export default Hotels;
