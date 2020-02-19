import React, {useState, useEffect} from 'react';
import Cars from "./Cars";


const  CarsContainer = () => {



  
  const [data, setData, list, setList] = useState([])
  
  const handleRemoveItem = (e) => {
    console.log('hello');
    
    const name = e.target.value;
     setList(list.filter((e)=>(e !== name)));
   };

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

      // console.log(res);

      setData(res);
    })
  }, [options]);


  return (
    <Cars data={data} handleRemoveItem={handleRemoveItem}/>
  )

}

export default CarsContainer
