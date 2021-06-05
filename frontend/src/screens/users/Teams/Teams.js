import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTeam } from "../../../actions/teams";
import { pages } from "./constants";
import teamsbg from "../../../assets/teamsbg.png";
import TeamCard from "./TeamCard";

const Teams = () => {
  const teamm = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const [ts, setTs] = useState("sa");

  const pageHandler = (tk) => {
    document.getElementById(ts).classList.add("bg-white");
    document.getElementById(ts).classList.remove("bg-black");
    document.getElementById(ts).classList.add("text-black");
    document.getElementById(ts).classList.remove("text-white");
    setTs(tk);
    document.getElementById(tk).classList.add("bg-black");
    document.getElementById(tk).classList.remove("bg-white");
    document.getElementById(tk).classList.add("text-white");
    document.getElementById(tk).classList.remove("text-black");
  };

  useEffect(() => {
    dispatch(listTeam(ts));
  }, [dispatch, ts]);
  const mystyle = {
    backgroundImage:
      "url(https://cdn.discordapp.com/attachments/826942452539588638/842125739691081838/unknown.png)",
  };
  return (
    <>
      <div style={mystyle} className="pb-20">
        <div class=" text-4xl md:ml-32 font-semibold text-white pt-8 md:pt-28  w-64">
          Team Structure
        </div>
        <div className=" md:ml-36 pt-4">
          <button
            id="sa"
            class="bg-black px-4 h-9 rounded-lg text-sm m-1.5 text-white focus:outline-none"
            onClick={() => pageHandler("sa")}
          >
            Students Affairs Office
          </button>
          {pages.map((page) => (
            <button
              id={page.ts}
              class="bg-white px-4 h-9 rounded-lg text-sm m-1.5 focus:outline-none"
              onClick={() => pageHandler(page.ts)}
            >
              {page.name}
            </button>
          ))}
        </div>
      </div>

      <div class="flex flex-wrap justify-center mb-14">
        {teamm.map((team) => {
          const { _id, name, post, email, contactNo, imagePath } = team;
          return (
            <TeamCard
              key={_id}
              id={_id}
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
    </>
  );
};

export default Teams;
