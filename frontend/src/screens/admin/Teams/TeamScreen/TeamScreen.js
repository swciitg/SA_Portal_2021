import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { BASEURL, BASEAPI } from "../../../../constants";
import { teams } from "./constant";
import { listTeam, deleteTeam } from "../../../../actions/teams";

const TeamScreen = () => {
  const ts = useParams().team;
  const singleteam = teams.find((t) => t.ts === ts).team;
  const teamm = useSelector((state) => state.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listTeam(ts));
  }, [dispatch, ts]);
  return (
    <>
      <h1 className="text-3xl text-black pb-6">{singleteam} Members</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={{
            pathname: `${BASEURL}/admin/team/${ts}/add`,
            teamname: `${singleteam}`,
          }}
        >
          Add Members
        </Link>
      </div>

      <div className="w-auto mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Email Id
                </th>

                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Contact No.
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Post
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Post Desc.
                </th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                  Priority No.
                </th>
                <th className=" text-center py-3 px-4 uppercase font-semibold text-sm">
                  Image
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Edit
                </th>

                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700" id="myMenu">
              {teamm.map(
                (
                  {
                    name,
                    email,
                    contactNo,
                    imagePath,
                    post,
                    postdesc,
                    priority_number,
                    _id,
                  },
                  i
                ) => {
                  return (
                    <tr key={i}>
                      <td className="text-left py-3 px-4">{name}</td>
                      <td className="text-left py-3 px-4">{email}</td>
                      <td className="text-left py-3 px-4">{contactNo}</td>
                      <td className="text-left py-3 px-4">{post}</td>
                      <td className="text-left py-3 px-4 ">{postdesc}</td>
                      <td className="text-center py-3 px-4">
                        {priority_number}
                      </td>
                      <td className="text-center py-3 px-4">
                        {/* <a
                                    className="hover:text-blue-500"
                                    href={imagePath}
                                    rel="noreferrer"
                                    target="_blank"
                                    >
                                    Img
                                    </a> */}
                        <div>
                          <img
                            style={{ width: "100px", height: "100px" }}
                            src={`${BASEAPI}/team/${ts}/${_id}`}
                            alt="profile"
                          />
                        </div>
                      </td>

                      <td className="text-left py-3 px-4">
                        <Link
                          to={{
                            pathname: `${BASEURL}/admin/team/${ts}/${_id}`,
                            teamname: `${singleteam}`,
                            formData: {
                              name,
                              email,
                              contactNo,
                              imagePath,
                              post,
                              postdesc,
                              priority_number,
                              _id,
                            },
                          }}
                        >
                          <button className="hover:text-blue-500">Edit</button>
                        </Link>
                      </td>
                      <td className="text-left py-3 px-4">
                        <button
                          className="hover:text-red-500"
                          onClick={() => dispatch(deleteTeam(ts, _id))}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TeamScreen;
