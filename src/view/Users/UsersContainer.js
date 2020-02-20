import React, {useState, useEffect} from 'react';
import Users from "./Users";
import LeftSide from "../../components/Planning/index.js"


const  UsersContainer = () => {

  const [data, setData] = useState([])
  

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'application/json'
      },
  };

  useEffect(() => {
    fetch("http://localhost:3000/visitor", options)
    .then(res => {
      if(res.ok)
      console.log(res)
        return res.json()
    })
    .then((res) => {

      // console.log(res);

      setData(res);
    })
  }, []);


  return (
    <Users data={data}/>
  )

}

export default UsersContainer
