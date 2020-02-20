import React, {useState, useEffect} from 'react';
import Users from "./Users";


const  UsersContainer = () => {

  const [data, setData] = useState([])
  const [refresh, setRefresh]= useState(false)

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'application/json'
      },
  };

  useEffect(() => {
    function getData() {
      fetch("/api/visitor", options)
      .then(res => {
        if(res.ok)
        console.log(res)
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
    <Users setRefresh={setRefresh} data={data}/>
  )

}

export default UsersContainer
