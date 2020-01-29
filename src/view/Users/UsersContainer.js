import React, {useState, useEffect} from 'react';
import Users from "./Users";


const  UsersContainer = () => {

  const [data, setData] = useState({})

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'text/plain'
      },
  };

  useEffect(() => {
    fetch("http://localhost:3000/car", options)
    .then(res => {
      if(res.ok)
        return res.json()
    })
    .then((res) => {
      // res.ok ? setData(res.json()) : null

      console.log(JSON.stringify(res));
      setData(JSON.stringify(res))
    })
  });


  return (
    <Users data={data}/>
  )

}

export default UsersContainer
