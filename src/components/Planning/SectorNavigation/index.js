import React from "react";
import { Tabs } from 'antd';
import Calendar from '../../Calendar/Calendar'


const { TabPane } = Tabs;

const SectorNavigation = () => {

      
    return (
        <div className="pages-button">
            <Tabs defaultActiveKey="1" size="large">
                <TabPane tab="Paris" key="1">
                    <Calendar />
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