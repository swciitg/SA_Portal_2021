import React from "react";
import TeamCard from "./TeamCard";

const TeamScreen = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://media.discordapp.net/attachments/826942452539588638/842125739691081838/unknown.png?width=1440&height=488)",
        }}
        class=" h-96"
      >
        <div class=" text-4xl left-32 font-semibold text-white top-28 relative">
          Team Structure
        </div>
        <div class="ml-32 top-36 relative">
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Students Affairs Office
          </button>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Gymkhana Office
          </button>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Counselling Cell
          </button>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Visiting Artists-in-residence
          </button>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            New SAC Building
          </button>
          <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
            Hostels
          </button>
        </div>
      </div>
      <div class="flex flex-wrap justify-center mb-14">
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default TeamScreen;
