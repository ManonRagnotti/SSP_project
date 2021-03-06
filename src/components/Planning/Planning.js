import React, {useState, useEffect} from 'react';
import {Calendar, Collapse, Radio, Icon} from "antd";

import "../../styles/components/planning.scss"
import CardDroppable from "./Card/Card";
import SectorNavigation from "./SectorNavigation/SectorNavigation";

const {Panel} = Collapse;

/*
* Left side planning : Content of left side panel in planning page.
* There is a calendar, pairs of the chosen sector, emergencies, hotels to be replaced and suggestions
*/

const LeftSide = ({res}) => {

  const [data, setData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'ContentType': 'application/json'
    }
  };

  useEffect(() => {
    fetch("/api/visitors", options).then(res => {
      if (res.ok)
        return res.json()
    }).then((res) => {
      setData(res);
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps,
  }, []);

  return (<div className="leftSide" id="external-events">
    <div className="calendar">
      <Calendar fullscreen={false}/>
    </div>
    <div className="container">
      <Collapse expandIconPosition="right" bordered={false} defaultActiveKey={['1']}>
        <Panel header="Binomes" key="1">
          <Radio.Group defaultValue={1}>
            <div className="radio-container">
              <Radio value={1}>Binome 1</Radio>
              <div className="radio-content" draggable={true}>
                {
                  (data && data.length) && data.slice(0, 2).map((v, index) => (<div className="identity" key={index}>
                    <span className="lastName">{v.lastName}</span>&#160;<span className="name">{v.name}</span>
                    <Icon type="close"/>
                  </div>))
                }
              </div>
            </div>
            <div className="radio-container">
              <Radio value={2}>Binome 2</Radio>
              <div className="radio-content" draggable={true}>
                {
                  (data && data.length) && data.slice(2, 4).map((v, index) => (<div className="identity" key={index}>
                    <span className="lastName">{v.lastName}</span>&#160;<span className="name">{v.name}</span>
                    <Icon type="close"/>
                  </div>))
                }
              </div>
            </div>
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
    <div className="container">
      <Collapse expandIconPosition="right" bordered={false} className="urgency" defaultActiveKey={['1']}>
        <Panel header="Urgences" key="1">
          <CardDroppable/>
          <CardDroppable/>
        </Panel>
      </Collapse>
    </div>
    <div className="container">
      <Collapse expandIconPosition="right" bordered={false} className="replace" defaultActiveKey={['1']}>
        <Panel header="À replacer" key="1">
          <CardDroppable/>
          <CardDroppable/>
        </Panel>
      </Collapse>
    </div>
    <div className="container">
      <Collapse expandIconPosition="right" bordered={false} className="suggest" defaultActiveKey={['1']}>
        <Panel header="Suggestions" key="1">
          <CardDroppable/>
          <CardDroppable/>
        </Panel>
      </Collapse>
    </div>
  </div>)
}
const Planning = () => {

  return (<div className="planningContainer">
    <LeftSide/>
    <SectorNavigation/>
  </div>);
};

export default Planning;
