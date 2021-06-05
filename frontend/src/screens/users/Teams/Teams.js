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
    setTs(tk);
  };

  useEffect(() => {
    dispatch(listTeam(ts));
  }, [dispatch, ts]);
  const mystyle = {
    backgroundImage: `url(${teamsbg})`,
  };
  return (
    <>
      <div style={mystyle} className="pb-20">
        <div class=" text-4xl md:ml-32 font-semibold text-white pt-8 md:pt-28  w-64">
          Team Structure
        </div>
        <div className=" md:ml-36 pt-4">
          {pages.map((page) => (
            <button
              id={page.ts}
              class={`${
                ts === page.ts ? "bg-black text-white" : "bg-white text-black"
              }  px-4 h-9 rounded-lg text-sm m-1.5 focus:outline-none`}
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
