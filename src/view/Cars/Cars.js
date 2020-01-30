import React from 'react';
import "antd/dist/antd.css";
import {Link} from "react-router-dom";



const Cars = ({data, res}) => {

  return(
    <div>
      {
        data.length > 0 ? (
          <p>{data[0].carType}</p>
      ) : null
    }
    </div>

  )

};


export default Cars
