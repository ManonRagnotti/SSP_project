import React, { useEffect } from 'react';
import './calendar.scss';
import CardDroppable from '../Planning/Card/index';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';



export default function Calendar() {
    useEffect(() => {
        let draggableEl = document.getElementById("external-events");
        new Draggable(draggableEl, {
            itemSelector: ".fc-event",
            eventData: function(eventEl) {
              let title = eventEl.getAttribute("title");
              let id = eventEl.getAttribute("data");
              return {
                title: title,
                id: id
              };
            }
          })
      }, [])
    return(
        <div>
        <Fullcalendar 
            defaultView="timeGridWeek"
            plugins={[ timeGridPlugin, interactionPlugin ]}
            droppable={true}
            weekends={false}
            locale="fr"
            events={[{id: 'a',
            title: 'my event',
            start: '2020-02-20'}]}
        />
        </div>
    )
}