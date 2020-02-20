import React, {useState, useEffect} from 'react';
import { Card } from "antd";

import "../../../styles/components/planning.scss"

const CardDroppable = ({res}) => {

  const [data, setData] = useState([])

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'application/json'
      },
  };

  const urls = [
    "http://localhost:3000/hotelScore",
    "http://localhost:3000/hotel"
  ];
  useEffect(() => {
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
      setData(filteredArr);
    })
  }, []);

  console.log(data);

  let randomHotel = Math.floor(Math.random() * 10);

  const variableColor = (score) => {
    if (score <= 30) {
      return 'vert'
    }
    return 'rouge'
  }


    return (
        <div id="external-events" className="card">
            <Card draggable={true} className="fc-event" hotelName="hotelName" score="score">
              {(data && data.length) ? (
                <div className="infoHotel">
                  <span className="name">{data[randomHotel].name}</span>
                  <div className={`score ${variableColor(data[randomHotel].score)}`}>
                    {/* VALUE DU SCORE */}
                    <span>{data[randomHotel].score} / 60</span>
                  </div>
                </div>
            ): null}
                {/* CONDITION IF URGENT */}
                {/* SINON AFFICHER NOTE */}
            </Card>
        </div>
    );
}

export default CardDroppable;
