import React, {useState, useEffect} from 'react';
import { Calendar, Collapse, Radio, Icon } from "antd";

import "../../styles/components/planning.scss"
import CardDroppable from "./Card";
import SectorNavigation from "./SectorNavigation";

const { Panel } = Collapse;

const LeftSide = ({ res}) => {
  const [data, setData] = useState([])

  const options = {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'ContentType': 'application/json'
      },
  };

  useEffect(() => {
    fetch("http://localhost:3000/visitor", options)
    .then(res => {
      if(res.ok)
      console.log(res)
        return res.json()
    })
    .then((res) => {
      setData(res);
    })
  }, []);


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
                                    {(data && data.length) && data.slice(0,2).map((v, index) => (
                                      <div className="identity">
                                        <span className="lastName">{v.lastName}</span>&#160;<span className="name">{v.name}</span>
                                        <Icon type="close"/>
                                      </div>
                                  ))}
                                </div>
                            </div>
                            <div className="radio-container">
                                <Radio value={2}>Binome 2</Radio>
                                <div className="radio-content" draggable={true}>
                                  {(data && data.length) && data.slice(2,4).map((v, index) => (
                                    <div className="identity">
                                      <span className="lastName">{v.lastName}</span>&#160;<span className="name">{v.name}</span>
                                      <Icon type="close"/>
                                    </div>
                                ))}
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
            <div className="container">
                <Collapse expandIconPosition="right" bordered={false} className="suggest" defaultActiveKey={['1']}>
                    <Panel header="Suggestions" key="1">
                        <CardDroppable />
                        <CardDroppable />
                    </Panel>
                </Collapse>
            </div>
        </div>
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
