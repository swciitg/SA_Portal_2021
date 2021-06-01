import React from "react";
import TeamNav from "./TeamNav";
import TeamCard from "./TeamCard";

const TeamScreen = () => {
  return (
    <div>
      <TeamNav />
       <div class="flex flex-wrap justify-center mb-14">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default TeamScreen;
