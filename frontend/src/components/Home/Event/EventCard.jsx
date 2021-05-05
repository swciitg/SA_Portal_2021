import React from 'react';
import rightArrow from './arrow-right-solid.svg';

function EventCard(){


    return (
        <div className="h-auto rounded-md relative" style={{'backgroundColor':'#2164E8','width':'850px'}}>
            <div>
                <img className="rounded-md" style={{'height':'418px','width':'850px'}} src="https://images.unsplash.com/photo-1617387247740-7006c0fd700c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
            </div>
            <div className="ml-6 text-white mb-8">
                <div className="mt-4 text-base font-normal">
                    12 December 2020
                </div>
                <div className="w-7/12 text-2xl font-semibold pb-10">
                    IIT Guwahati students build a car that can go from 0-60km/hr in 6 seconds.
                </div>

                
                    
                <img className="w-4 m-2 absolute bottom-10 right-6" src={rightArrow} />
                
            </div>
        </div>
    )

}

export default EventCard;