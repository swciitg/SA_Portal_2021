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
      <div className="hidden md:block">
        <div style={mystyle} className="pb-20 h-96">
          <div className=" text-xl sm:text-2xl sm:ml-8 md:text-4xl md:ml-32 font-semibold text-white pt-8 md:pt-28 ">
            Team Structure
          </div>
          <div className=" sm:ml-10 md:ml-36 pt-4">
            {pages.map((page) => (
              <button
                id={page.ts}
                className={`${
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
      <div className="block md:hidden flex justify-between pt-8 mx-4">
        <div className=" text-xl  font-semibold py-2 ">Team Structure</div>
        <div className="relative inline-block  ">
          <select
            className=" border-2 bg-black text-white rounded-md py-2"
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
            <div className="md:relative md:-top-20 lg:-top-32">
              <div className=" text-black text-xl md:text-4xl font-semibold flex justify-center mb-4">
                {pages[0].tk[idx]}
              </div>
              {idx === 3 && ts === pages[0].ts ? (
                <>
                  <div className="">
                    {dean ? (
                      <div className="flex justify-center">
                        <TeamCard
                          key={dean._id}
                          id={dean._id}
                          name={dean.name}
                          post={dean.post}
                          imagePath={dean.imagePath}
                          contactNo={dean.contactNo}
                          email={dean.email}
                          postdesc={dean.postdesc}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="md:flex md:flex-wrap justify-center space-x-8 mb-8">
                      {team.data.splice(1).map((team1) => {
                        const {
                          _id,
                          name,
                          post,
                          imagePath,
                          contactNo,
                          email,
                          postdesc,
                        } = team1;
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
                              postdesc={postdesc}
                            />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <div className="md:flex md:flex-wrap justify-center">
                  {team.data.map((team1) => {
                    const {
                      _id,
                      name,
                      post,
                      imagePath,
                      contactNo,
                      email,
                      postdesc,
                    } = team1;
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
                          postdesc={postdesc}
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
