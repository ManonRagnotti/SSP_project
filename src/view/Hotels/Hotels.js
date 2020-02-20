import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './Hotels.scss';
import Carte from "../../components/HotelCard/HotelCard";

const Hotels = ({data, res, setRefresh}) => {

  return (<div className="hotelsPage">
    <ul className="filter">
      <li>Paris</li>
      <li>93</li>
      <li>78/95</li>
      <li>92/94</li>
      <li>77/91</li>
    </ul>

    <div className="hotelsContainer">
      <h3>Hotels</h3>
      <button className="addNewHotel">+ Ajouter</button>

      <div className="headerList">
        <ul>
          <li className="name">Nom</li>
          <li className="address">Adresse</li>
          <li className="score">Notation</li>
          <li className="visite">Dernière date de visite</li>
        </ul>
      </div>

      <Carte data={data} setRefresh={setRefresh}/>

    </div>

  </div>);

}
export default Hotels;
