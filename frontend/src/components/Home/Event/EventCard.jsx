import React from "react";
import rightArrow from './arrow-right-solid.svg';

const EventCard = ({title,imgPath,eventDate}) => {


    return (
        <div>
            <div className="rounded-md relative" style={{'backgroundColor':'#2164E8','width':'450px','height': '450px'}}>
            <div>
                <img className="rounded-md h-auto w-full" src={imgPath} />
            </div>
            <div className="ml-6 text-white mb-8">
                <div className="mt-4 text-base font-normal">
                    {eventDate}
                </div>
                <div className="w-10/12 text-lg font-semibold pb-10">
                    {title}
                </div>   
                <img className="w-4 m-2 absolute bottom-10 right-6" src={rightArrow} />
                
            </div>
        </div>
        </div>
        
    )

}

export default EventCard;