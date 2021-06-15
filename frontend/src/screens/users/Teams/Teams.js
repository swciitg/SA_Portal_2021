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
    setTs(tk);
  };

  useEffect(() => {
    dispatch(listTeams(ts));
  }, [dispatch, ts]);
  const mystyle = {
    backgroundImage: `url(${teamsbg})`,
  };
  return (
    <>
      <div className="hidden sm:block">
        <div style={mystyle} className="pb-20 h-96">
          <div class=" text-xl sm:text-2xl sm:ml-8 md:text-4xl md:ml-32 font-semibold text-white pt-8 md:pt-28  w-64">
            Team Structure
          </div>
          <div className=" sm:ml-10 md:ml-36 pt-4">
            {pages.map((page) => (
              <button
                id={page.ts}
                class={`${
                  ts === page.ts ? "bg-black text-white" : "bg-white text-black"
                }  px-4 h-9 rounded-lg text-xs md:text-sm m-1.5 focus:outline-none`}
                onClick={() => pageHandler(page.ts)}
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="block sm:hidden flex justify-between pt-8">
        <div class=" text-xl  font-semibold py-2 ">Team Structure</div>
        <div class="relative inline-block  ">
          <select
            class=" border-2 bg-black text-white rounded-md py-2"
            onChange={(e) => {
              pageHandler(JSON.parse(e.target.value));
            }}
          >
            {pages.map((page) => (
              <option
                className="bg-white text-black text-xs"
                key={page.ts}
                value={JSON.stringify(page.ts)}
              >
                {page.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      {teamm.map((team, idx) => {
        const dean = team.data[0];

        return (
          <>
            <div className="sm:relative sm:-top-40">
              <div className=" text-black ml-5 text-xl md:text-4xl md:ml-32 font-semibold">
                {pages[0].tk[idx]}
              </div>
              {(idx === 0 || idx === 3) && ts === pages[0].ts ? (
                <>
                  <div>
                    <TeamCard
                      key={dean._id}
                      id={dean._id}
                      name={dean.name}
                      post={dean.post}
                      imagePath={dean.imagePath}
                      contactNo={dean.contactNo}
                      email={dean.email}
                    />
                    <div className="md:flex md:flex-wrap  mb-8">
                      {team.data.splice(1).map((team1) => {
                        const { _id, name, post, imagePath, contactNo, email } =
                          team1;
                        return (
                          <>
                            <TeamCard
                              key={_id}
                              id={_id}
                              name={name}
                              post={post}
                              imagePath={imagePath}
                              contactNo={contactNo}
                              email={email}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="md:flex md:flex-wrap  mb-8">
                  {team.data.map((team1) => {
                    const { _id, name, post, imagePath, contactNo, email } =
                      team1;
                    return (
                      <>
                        <TeamCard
                          key={_id}
                          id={_id}
                          name={name}
                          post={post}
                          imagePath={imagePath}
                          contactNo={contactNo}
                          email={email}
                        />
                      </>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
};

export default Teams;
