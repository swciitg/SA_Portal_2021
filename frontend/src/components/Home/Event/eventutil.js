import EventCard from "./EventCard";
import { SwiperSlide } from "swiper/react";

export const eventallCards = (events, allCategory) => {
  if (events && events.length !== 0) {
    if (allCategory === "all") {
      return [...events].map((event, i) => {
        const { title, _id, imgPath, eventDate, category, link } = event;
        return (
          <SwiperSlide key={_id}>
            <EventCard
              _id={_id}
              title={title}
              imgPath={imgPath}
              eventDate={eventDate}
              category={category}
              link={link}
            />
          </SwiperSlide>
        );
      });
    } else {
      const filteredEve = [...events].filter((e) => {
        return e.category.toLowerCase() === allCategory.toLowerCase();
      });
      console.log("filtered", filteredEve);
      return filteredEve.length !== 0 ? (
        filteredEve.map((event, i) => {
          const { title, _id, imgPath, eventDate, category } = event;
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
    return <span className="text-3xl text-gray-400">No Events</span>;
  }
};
