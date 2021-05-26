import EventCard from "./EventCard";

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
            
            <EventCard
              key={_id}
              title={title}
              imgPath={imgPath}
              eventDate={eventDate}
              category={category}
            />
          );
        });
      } else {
        const filteredEve = [...events].filter((e) => {
          return e.category.toLowerCase() === allCategory.toLowerCase();
        });
        console.log("filtered", filteredEve);
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
                key={_id}
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
  