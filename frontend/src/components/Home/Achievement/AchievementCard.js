import React from "react";

function AchievementCard(props){
    return(
        <div className="w-96">
              <div className="font-bold text-2xl">
                IIT Guwahati Students build a car that can go from 0-60 Km/hr in
                6s
              </div>
              <div className="text-md mt-2">
                {props.string}
              </div>
              <div className="self-end font-medium my-2 flex items-center">
                <p>Read more</p>
                <div className="bg-black p-0.5 w-5 h-5 rounded ml-2">
                  <img
                    src="https://pngimage.net/wp-content/uploads/2018/06/white-right-arrow-png-5.png"
                    className="w-4"
                  />
                </div>
              </div>
              </div>
    )
}

export default AchievementCard;