import EventCard from "./EventCard";
import { SwiperSlide } from "swiper/react";

export const eventallCards = (events, allCategory) => {
    if (events && events.length !== 0) {
      if (allCategory === "all") {
        return [...events].map((event, i) => {
          const {
            title,
            _id,
            imgPath,
            eventDate,
            category,
          } = event;
          return (
           <SwiperSlide>           
            <EventCard
              _id={_id}
              title={title}
              imgPath={imgPath}
              eventDate={eventDate}
              category={category}
            />
            </SwiperSlide> 
          );
        });
      } else {
        const filteredEve = [...events].filter((e) => {
          return e.category.toLowerCase() === allCategory.toLowerCase();
        });
        return filteredEve.length !== 0 ? (
            filteredEve.map((event, i) => {
            const {
                title,
                _id,
                imgPath,
                eventDate,
                category,
            } = event;
            return (
                <EventCard
                _id={_id}
                title={title}
                imgPath={imgPath}
                eventDate={eventDate}
                category={category}
              />
            );
          })
          ) : (
          <span className="text-base text-white">
            No Events in the{" "}
            <span className="font-black font-semibold">{`${allCategory}`}</span>{" "}
            category
          </span>
        );
      }
    } else {
      return <span className="text-3xl text-red-600">No Events</span>;
    }
  };
  