import React, {useEffect, useState} from 'react';
import './calendar.scss';
import Fullcalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin, {Draggable} from '@fullcalendar/interaction';

export default function Calendar() {

  const [event, setEvent] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'ContentType': 'application/json'
    }
  };

  useEffect(() => {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function(eventEl) {
        let hotelName = eventEl.getAttribute("hotelName");
        let score = eventEl.getAttribute("score");
        return {hotelName: hotelName, score: score};
      }
    })
    function getEvents() {
      fetch("http://localhost:3000/event", options).then(res => {
        if (res.ok)
          return res.json()
      }).then((res) => {
        // console.log(res);
        setEvent(res);
      })
    }
    getEvents()
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, [])

  return (<div>
    <Fullcalendar defaultView="timeGridWeek" plugins={[timeGridPlugin, interactionPlugin]} droppable={true} weekends={false} locale="fr" events={event} minTime="07:00:00"/>
  </div>)
}
