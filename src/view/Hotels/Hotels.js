import React from 'react';

import './Hotels.scss';
import Carte from "../../components/HotelCard/HotelCard";


const Hotels = ({data, res,values, setValues, setRefresh}) => {
    const {hotelFilter} = values;
    return (
      <div className="hotelsPage">
        <ul className="filter">
          <li>Paris</li>
          <li>93</li>
          <li>78/95</li>
          <li>92/94</li>
          <li>77/91</li>
        </ul>

        <div className="hotelsContainer">
            <div className="hotelsHeader">
          <h3>Hotels</h3>
      <button className="addNewHotel">+ Ajouter</button>
                <input value={hotelFilter} onChange={e=> setValues({...values,hotelFilter: e.target.value})} className="hotelsSearch" placeholder="Rechercher un hotel"></input>
                </div>


                <div className="headerList">
            <ul>
              <li className="name">Nom</li>
              <li className="address">Adresse</li>
              <li className="score">Notation</li>
              <li className="visite">Dernière date de visite</li>
            </ul>
          </div>

          <Carte data={hotelFilter ? data.filter(d => d.name.toLowerCase().includes(hotelFilter.toLowerCase()) || d.address.toLowerCase().includes(hotelFilter.toLowerCase())  ) : data} setRefresh={setRefresh} />

        </div>
      </div>);
          }

export default Hotels;
