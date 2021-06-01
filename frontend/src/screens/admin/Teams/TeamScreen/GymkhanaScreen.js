import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../../constants";
import {
    listTeam,
    deleteTeam,
  } from "../../../../actions/gymkhanateams";
const GymkhanaScreen = () =>{
    const teams = useSelector((state) => state.gymkhanateam);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTeam());
    }, [dispatch]);
    return (
        <>
            <h1 className="text-3xl text-black pb-6">Gymkhana Office Members</h1>

            <div className="mt-6">
            <Link
                className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                to={`${BASEURL}/admin/team/gymkhana/add`}
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
                        {teams.map(
                            (
                            {
                                name,
                                email,
                                contactNo,
                                imagePath,
                                post,
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
                                <td className="text-center py-3 px-4">{priority_number}</td>
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
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full" src={`/uploads/team/${imagePath}`}
                                            alt=" image" />
                                        </div>
                                    </div>
                                </td>

                                <td className="text-left py-3 px-4">
                                    <Link
                                    to={{
                                        pathname: `${BASEURL}/admin/team/gymkhana/${_id}`,
                                        formData: {
                                            name,
                                            email,
                                            contactNo,
                                            imagePath,
                                            post,
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
                                    onClick={() => dispatch(deleteTeam(_id))}
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
    )
}

export default GymkhanaScreen;