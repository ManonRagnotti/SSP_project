import React, {useState, useEffect} from 'react';
import Cars from "./Cars";


const  CarsContainer = () => {

  const [data, setData] = useState([])

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

      console.log(res);

      setData(res);
    })
  }, []);


  return (
    <Cars data={data}/>
  )

}

export default CarsContainer
