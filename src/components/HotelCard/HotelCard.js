import React from 'react';
import './hotelCard.scss';

export default ( {data} ) => {



  return (
    <div className="hotelcard">
        {
          (data && data.length)
          && data.map (
            h => {
              return (
                <ul className="hotelInfo">
                  <li className="name">{h.name}</li>
                  <li className="address">{h.address}</li>
                  <li className="score">{h.visite? h.score: ""}</li>
                  <li className="visite">{h.visite ? new Date(h.visite).toLocaleDateString() : ""}</li>
                  <div className="hotelInfo-edit">
                    <button className="hotelInfo-edit_btn edit">
                      <img alt="" className="icon-pen" src={require('../../assets/img/pen.svg')}></img>
                    </button>
                    <button className="hotelInfo-edit_btn delete">
                      <img alt="" className="icon-trash" src={require('../../assets/img/trash.svg')}></img>
                    </button>
                  </div>
                </ul>
              )
            }
          )
        }
    </div>
  )
}
