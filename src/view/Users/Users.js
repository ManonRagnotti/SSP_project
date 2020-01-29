import React from 'react';
import "antd/dist/antd.css";
import {Link} from "react-router-dom";



const Users = ({data}) => {
  const {carType} = data
    return(
        <section className="interface">
            <p>{data.carType}</p>
        </section>
    )
};


export default Users
