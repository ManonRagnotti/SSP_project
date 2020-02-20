import React, {useState, useEffect} from 'react';
import Hotels from "./Hotels";


const  HotelsContainer = () => {

  const [data, setData] = useState([])
  const [refresh, setRefresh]= useState(false)

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'text/plain'
      },
  };

  const urls = [
    "/api/hotelScore",
    "/api/hotel"
  ];



  useEffect(() => {
    // fetch("http://localhost:3000/hotelScore", options),
    // fetch("http://localhost:3000/hotel", options)
    function getData(){
      Promise.all(urls.map(url =>
        fetch(url)
        .then(res => {
          if(res.ok)
          return res.json()
        })
      ))
      .then((res) => {

        const arr1 = res[0]
        const arr2 = res[1]
        const [ visites, hotels ] = res

      const filteredArr = hotels.map(hotel=>{
          const hotelVisites = visites.filter(visite => visite.idHotel === hotel.uid).sort((a,b)=> a.dateVisit- b.dateVisit)
          const visiteAndRate = {
            visite: hotelVisites.length ? hotelVisites[hotelVisites.length - 1].dateVisit :"",
             score: hotelVisites.length ? hotelVisites[hotelVisites.length - 1].score :""
          }
          return {...hotel, ...visiteAndRate}
        })

        console.log(filteredArr)
        //
        // console.log(res)

        setData(filteredArr);
        setRefresh(false);
      })
    }
    getData()

    if (refresh){
      getData()
    }

  }, [refresh]);


  return (
    <Hotels setRefresh={setRefresh} data={data}/>
  )

}

export default HotelsContainer;
