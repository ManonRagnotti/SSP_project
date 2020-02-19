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
                </ul>
              )
            }
          )
        }
    </div>
  )
}
