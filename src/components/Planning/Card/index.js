import * as React from "react";
import { Card } from "antd";

import "../../../styles/components/planning.scss"

const CardDroppable = () => {
    return (
        <div className="card external-events">
            <Card draggable={true} className="fc-event" title="titre" data="1">
                Card content skjfkjsb fskjgdk fksdjnfkdsj fksdjnf
                {/* CONDITION IF URGENT */}
                {/* SINON AFFICHER NOTE */}
                <div className="score">
                    {/* VALUE DU SCORE */}
                    24/60
                </div>
            </Card>
        </div>
    );
}

export default CardDroppable;
