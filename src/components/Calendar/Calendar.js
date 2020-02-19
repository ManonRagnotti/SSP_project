import React from 'react';
import './calendar.scss';
import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {

    return(
        <Fullcalendar 
            defaultView="dayGridWeek" plugins={[ dayGridPlugin ]}
        />
    )
}