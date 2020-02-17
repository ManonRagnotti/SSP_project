import React from 'react';
import './visitorCard.scss';

export default ( {data} ) => {
  return (
    <div className="boxCard">
      <ul>
        {
          (data && data.length)
          && data.map (
            v => {
              return (
                <li className="visitor">
                  <span className="lastName">{v.lastName}</span>
                  <span className="name">{v.name}</span>
                </li>
              )
            }
          )
        }
      </ul>
    </div>
  )
}
