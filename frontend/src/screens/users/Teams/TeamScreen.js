import TeamCard from "./TeamCard";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTeam } from "../../../actions/counsellingteams";
import { pages } from "./constants";
import teamsbg from "../../../assets/teamsbg.png";

const TeamScreen = () => {
  const teams = useSelector((state) => state.counsellingteam);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listTeam());
  }, [dispatch]);

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://media.discordapp.net/attachments/826942452539588638/842125739691081838/unknown.png)",
        }}
        class=" h-96"
      >
        <div class=" text-4xl md:left-32 font-semibold text-white top-8 md:top-28 relative w-64">
          Team Structure
        </div>
        <div class="md:ml-32 top-20 md:top-36 relative">
          {pages.map((page) => (
            <button class="bg-white px-4 h-9 rounded-lg text-sm m-1.5">
              {page.name}
            </button>
          ))}
        </div>
      </div>
      <div class="flex flex-wrap justify-center mb-14">
        {teams.map((team, idx) => {
          const { _id, name, post, email, contactNo, imagePath } = team;
          return (
            <TeamCard
              key={_id}
              name={name}
              post={post}
              email={email}
              contactNo={contactNo}
              imagePath={imagePath}
            />
          );
        })}
        ;
      </div>
    </div>
  );
};

export default TeamScreen;
