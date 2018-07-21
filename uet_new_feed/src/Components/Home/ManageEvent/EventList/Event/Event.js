import React from "react";
import './Event.css';
import moment from "moment";

export default class Event extends React.Component {

    render() {
        const tmp = new Date(2018,1,9,13,0,0);
        const day = moment(tmp)._d;
        return (
            <div className='event-container'>
                <div className="img-event">
                    <img src="http://www.specialevents.gatech.edu/sites/default/files/images/tech_trend.jpg"
                         alt="img-event"/>
                </div>
                <div className="infor-event">
                    <div className="date-location">
                        {day.toLocaleString()}
                        <br/>
                        Hanoi
                    </div>
                </div>
                <div className="context">
                    <div className="header-context">This is Header</div>
                    <div className="description-context">This is description
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged..........
                    </div>
                </div>
            </div>
        )
    }
}