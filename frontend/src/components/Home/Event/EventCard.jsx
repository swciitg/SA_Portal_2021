import React from "react";
import rightArrow from './arrow-right-solid.svg';
import moment from 'moment';

import { BASEAPI } from "../../../constants";

const EventCard = ({title,_id,eventDate}) => {
console.log(_id);

    return (
        <div>
            <div>
                <div className="rounded-md relative" style={{'backgroundColor':'#2164E8','width':'400px','height': '450px'}}>
                    <img className="rounded-md" style={{'height':'350px','width': '400px'}} src={`${BASEAPI}/home/events/${_id}`} />
                    <div className="ml-6 text-white mb-8">
                        <div className="mt-4 text-base font-normal">
                        {moment(eventDate).format('DD MMM YYYY')}
                        </div>
                        <div className="w-10/12 text-lg font-semibold pb-10">
                            {title}
                        </div>   
                        <img className="w-4 m-2 absolute bottom-10 right-6" src={rightArrow} />
                        
                    </div>
                </div>
            </div>
           
        </div>
        
    )

}

export default EventCard;