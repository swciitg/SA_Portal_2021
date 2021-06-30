import AnnounceCard from "./AnnouceCard";

export const renderCards = (announcements, aCategory) => {
  if (announcements && announcements.length !== 0) {
    if (aCategory === "all") {
      return [...announcements].map((announcement, i) => {
        const { creation, title, description, _id, link, category } =
          announcement;
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
      });
    } else {
      const filteredAnn = [...announcements].filter((a) => {
        return a.category.toLowerCase() === aCategory.toLowerCase();
      });
      return filteredAnn.length !== 0 ? (
        filteredAnn.map((announcement, i) => {
          const { creation, title, description, _id, link, category } =
            announcement;
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
