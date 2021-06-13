import AnnounceCard from "./AnnouceCard";
import { SwiperSlide } from "swiper/react";

export const renderCards = (announcements, aCategory) => {
  if (announcements && announcements.length !== 0) {
    if (aCategory === "all") {
      return [...announcements].map((announcement, i) => {
        const {
          creation,
          title,
          description,
          _id,
          link,
          category,
        } = announcement;
        return (      
          <SwiperSlide >

            <AnnounceCard
            key={_id}
            creation={creation}
            description={description}
            title={title}
            link={link}
            category={category}
          />
                 
          </SwiperSlide>
          
        );
      });
    } else {
      const filteredAnn = [...announcements].filter((a) => {
        return a.category.toLowerCase() === aCategory.toLowerCase();
      });
      //console.log("filtered", filteredAnn);
      return filteredAnn.length !== 0 ? (
        filteredAnn.map((announcement, i) => {
          const {
            creation,
            title,
            description,
            _id,
            link,
            category,
          } = announcement;
          return (
            <AnnounceCard
              key={_id}
              creation={creation}
              description={description}
              title={title}
              link={link}
              category={category}
            />
          );
        })
      ) : (
        <span className="text-base text-gray-400">
          No announcements in the{" "}
          <span className="font-black font-semibold">{`${aCategory}`}</span>{" "}
          category
        </span>
      );
    }
  } else {
    return <span className="text-base text-gray-400">No announcements</span>;
  }
};

export const isoToDate = (creation) => {
  const dt = new Date(creation);
  let month;
  switch (dt.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
    default:
      month = "";
      break;
  }
  const date = `${dt.getDate()} ${month} ${dt.getFullYear()}`;

  return date;
};
