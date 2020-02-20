import React, {useState, useEffect} from 'react';
import Cars from "./Cars";

const  CarsContainer = () => {

  const [data, setData] = useState([])
  const [refresh, setRefresh]= useState(false)

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'text/plain'
      },
  };

  useEffect(() => {
    function getData() {
      fetch("/api/car", options)
      .then(res => {
        if(res.ok)
        return res.json()
      })
      .then((res) => {
        // console.log(res);
        setData(res);
        setRefresh(false);
      })
    }
    getData()

    if (refresh){
      getData()
    }
// eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [refresh]);


  return (
    <Cars setRefresh={setRefresh} data={data} />
  )

}

export default CarsContainer
