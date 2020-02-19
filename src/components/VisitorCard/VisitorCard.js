import React from 'react';
import './visitorCard.scss';

export default ( {data, v} ) => {
  return (
    <div className="visitor">
      <span className="lastName">{v.lastName}</span>
      <span className="name">{v.name}</span>
      <span className="status"> Disponible</span>
    </div>
  )
}
