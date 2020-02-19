import React from 'react';
import './hotelCard.scss';

export default ( {data} ) => {



  return (
    <tbody className="hotelcard">
        {
          (data && data.length)
          && data.map (
            h => {
              return (
                <tr>
                  <td className="name">{h.name}</td>
                  <td className="address">{h.address}</td>
                  <td className="score">{h.visite? h.score: ""}</td>
                  <td className="visite">{h.visite ? new Date(h.visite).toLocaleDateString() : ""}</td>
                </tr>
              )
            }
          )
        }
    </tbody>
  )
}
