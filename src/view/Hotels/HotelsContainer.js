import React, {useState, useEffect} from 'react';
import Hotels from "./Hotels";


const  HotelsContainer = () => {

  const [data, setData] = useState([])

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'text/plain'
      },
  };

  useEffect(() => {
    fetch("http://localhost:3000/hotelScore", options)
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
    <Hotels data={data}/>
  )

}

export default HotelsContainer;
