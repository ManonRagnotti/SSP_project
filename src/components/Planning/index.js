import * as React from "react";
import { Calendar, Collapse, Radio, Icon } from "antd";

import "../../styles/components/planning.scss"
import CardDroppable from "./Card";
import SectorNavigation from "./SectorNavigation";

const { Panel } = Collapse;

const LeftSide = () => {

    return (
        <div className="leftSide">
            <div className="calendar">
                <Calendar fullscreen={false} />
            </div>
            <div className="container">
                <Collapse expandIconPosition="right" bordered={false} defaultActiveKey={['1']}>
                    <Panel header="Binomes" key="1">
                        <Radio.Group defaultValue={1}>
                            <div className="radio-container">
                                <Radio value={1}>Binome 1</Radio>
                                <div className="radio-content" draggable={true}>
                                    Vanessa Salarié 5
                                    <Icon type="close"/>
                                </div>
                            </div>
                            <div className="radio-container">
                                <Radio value={2}>Binome 2</Radio>
                                <div className="radio-content" draggable={true}>
                                    Vanessa Salarié 5
                                    <Icon type="close"/>
                                </div>
                            </div>
                        </Radio.Group>
                    </Panel>
                </Collapse>
            </div>
            <div className="container">
                <Collapse expandIconPosition="right" bordered={false} className="urgency" defaultActiveKey={['1']}>
                    <Panel header="Urgences" key="1">
                        <CardDroppable />
                        <CardDroppable />
                        <CardDroppable />
                        <CardDroppable />
                    </Panel>
                </Collapse>
            </div>
            <div className="container">
                <Collapse expandIconPosition="right" bordered={false} className="replace" defaultActiveKey={['1']}>
                    <Panel header="À replacer" key="1">
                        <CardDroppable />
                        <CardDroppable />
                    </Panel>
                </Collapse>
            </div>
        </div >
    )
}
const Planning = () => {

    return (
        <div className="planningContainer">
            <LeftSide />
            <SectorNavigation />
        </div>
    );
};


export default Planning;
