import React from 'react';
import './visitorCard.scss';

export default({data, v, setRefresh}) => {

  //DELETE visitor
  const deleteData = async (_id) => {
    await fetch('/api/visitor/' + _id, {method: 'DELETE'})
    await setRefresh(true)
  }

  /*
  * visitorCard : for each visitor, create a div with dynamic content
  */

  return (<div className="visitor">
    <span className="lastName">{v.lastName}</span>
    <span className="name">{v.name}</span>
    <span className="secteur">
      Secteur {v.area}</span>
    <span className="status">
      Disponible</span>
    <div className="visitor-edit">
      <button className="visitor-edit_btn edit">
        <img alt="" className="icon-pen" src={require('../../assets/img/pen.svg')}></img>
      </button>
      <button className="visitor-edit_btn delete" onClick={() => deleteData(v._id)}>
        <img alt="" className="icon-trash" src={require('../../assets/img/trash.svg')}></img>
      </button>
    </div>
  </div>)
}
