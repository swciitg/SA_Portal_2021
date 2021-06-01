import TeamCard from "./TeamCard";

export const TeamAllCards = (teams) => {
    if (teams && teams.length !== 0) {
        return [...teams].map((team, i) => {
          const {
            name,
            email,
            contactNo,
            imagePath,
            post,
            _id,
          } = team;
          return (
            
            <TeamCard
              _id={_id}
              name={name}
              imagePath={imagePath}
              contactNo={contactNo}
              email={email}
              post={post}
            />
          );
        });
    } else {
      return <span className="text-3xl text-red-600">No Members</span>;
    }
  };