import React from "react";
import { Tabs } from 'antd';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const { TabPane } = Tabs;

const SectorNavigation = () => {
    return (
        <div className="pages-button">
            <Tabs defaultActiveKey="1" size="large">
                <TabPane tab="Paris" key="1">
                    <FullCalendar defaultView="dayGridWeek" plugins={[dayGridPlugin]} />
                </TabPane>
                <TabPane tab="93" key="2">
                </TabPane>
                <TabPane tab="78/95" key="3">
                </TabPane>
                <TabPane tab="92/94" key="4">
                </TabPane>
                <TabPane tab="77/91" key="5">
                </TabPane>
            </Tabs>
        </div>
    );
}

export default SectorNavigation;