import React, { useEffect } from 'react';
import './calendar.scss';
import CardDroppable from '../Planning/Card/index';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import frLocale from '@fullcalendar/core/locales/fr';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';



export default function Calendar() {
   
    return(
        <div>

        <Fullcalendar 
            defaultView="timeGridWeek"
            plugins={[ timeGridPlugin, interactionPlugin ]}
            droppable={true}
            weekends={false}
            locale="fr"
        />
        </div>
    )
}