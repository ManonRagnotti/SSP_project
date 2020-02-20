import React, {useState, useEffect} from 'react';
import Users from "./Users";
import LeftSide from "../../components/Planning/Planning.js"

const UsersContainer = () => {

  /*
  * users, visitors: fetch API data from the visitor tables for retrieve visitor data
  */

  const [data, setData] = useState([])
  const [refresh, setRefresh] = useState(false)

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'ContentType': 'application/json'
    }
  };

  useEffect(() => {
    function getData() {
      fetch("/api/visitor", options).then(res => {
        if (res.ok)
          console.log(res)
        return res.json()
      }).then((res) => {
        // console.log(res);
        setData(res);
        setRefresh(false);
      })
    }
    getData()

    if (refresh) {
      getData()
    }

  }, [refresh]);

  return (<Users setRefresh={setRefresh} data={data}/>)

}

export default UsersContainer
