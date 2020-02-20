import React from 'react';
import './hotelCard.scss';

export default ( {data, setRefresh} ) => {

  //DELETE hotel
  const deleteData = async (_id) => {
    // eslint-disable-next-line
    const res = await fetch('/api/hotel/' + _id, {
      method: 'DELETE'
    })
    await setRefresh(true)
  }

  return (
    <div className="hotelcard">
        {
          (data && data.length)
          && data.map (
            (h,index) => {
              return (
                <ul className="hotelInfo" key={index}>
                  <li className="name">{h.name}</li>
                  <li className="address">{h.address}</li>
                  <li className="score">{h.visite? h.score: ""}</li>
                  <li className="visite">{h.visite ? new Date(h.visite).toLocaleDateString() : ""}</li>
                  <div className="hotelInfo-edit">
                    <button className="hotelInfo-edit_btn edit">
                      <img alt="" className="icon-pen" src={require('../../assets/img/pen.svg')}></img>
                    </button>
                    <button className="hotelInfo-edit_btn delete" onClick={() => deleteData(h._id)}>
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
