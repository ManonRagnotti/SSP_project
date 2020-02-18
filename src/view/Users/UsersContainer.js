import React, {useState, useEffect} from 'react';
import Users from "./Users";


const  UsersContainer = () => {

  const [data, setData] = useState([])

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'text/plain'
      },
  };

  useEffect(() => {
    fetch("http://localhost:3000/visitor", options)
    .then(res => {
      if(res.ok)
        return res.json()
    })
    .then((res) => {

      console.log(res);

      setData(res);
    })
  }, [options]);


  return (
    <Users data={data}/>
  )

}

export default UsersContainer
