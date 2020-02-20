import React from 'react';
import "../Cars/Cars.scss"
import "antd/dist/antd.css";

const Cars = ({data, res, setRefresh}) => {

  //DELETE car
  const deleteData = async (_id) => {
    await fetch('http://localhost:3000/car/' + _id, {method: 'DELETE'})
    await setRefresh(true)
  }

  /*
  * Cars: for each car, create a div with dynamic content
  */

  return (<div className="cars">
    <div className="cars-container">
      <h3>Véhicules</h3>
      <button className="cars-add">+ Ajouter</button>

      <div className="carsCard">
        {
          (data && data.length) && data.map((c, index) => {
            return (<div className="cars-items" key={index}>
              <span className="cars-items_type">{c.carType}</span>
              <span className="cars-items_registration">{c.registration}</span>
              <div className="cars-edit">
                <button className="cars-edit_btn edit">
                  <img alt="" className="icon-pen" src={require('../../assets/img/pen.svg')}></img>
                </button>
                <button className="cars-edit_btn delete" onClick={() => deleteData(c._id)}>
                  <img alt="" className="icon-trash" src={require('../../assets/img/trash.svg')}></img>
                </button>
              </div>
            </div>)
          })
        }
      </div>
    </div>
  </div>)

};

export default Cars;
