import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTeams } from "../../../actions/teams";
import { pages } from "./constants";
import teamsbg from "../../../assets/teamsbg.png";

import TeamCard from "./TeamCard";
const Teams = () => {
  const teamm = useSelector((state) => state.teams);
  const dispatch = useDispatch();
  const [ts, setTs] = useState(pages[0].ts);
  const pageHandler = (tk) => {
    console.log(tk);
    setTs(tk);
    console.log(ts);
  };

  useEffect(() => {
    dispatch(listTeams(ts));
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
      {teamm.map((team, idx) => {
        return (
          <>
            {ts === pages[0].ts ? (
              <div className="text-4xl md:ml-32 font-bold text-black">
                {pages[0].tk[idx]}
              </div>
            ) : (
              ""
            )}

            <div className="flex flex-wrap justify-center mb-8">
              {team.data.map((team1) => {
                const { _id, name, post, imagePath, contactNo, email } = team1;
                return (
                  <TeamCard
                    key={_id}
                    id={_id}
                    name={name}
                    post={post}
                    imagePath={imagePath}
                    contactNo={contactNo}
                    email={email}
                  />
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Teams;
