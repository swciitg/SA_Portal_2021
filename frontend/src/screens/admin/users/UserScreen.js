import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  listUsers,
  deleteUser,
  changeAdminStatus,
} from "../../../actions/user";

const UserScreen = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Users</h1>

      <div className="w-full mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Name
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Email
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Status
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Change Status
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {users.map(({ name, email, isAdmin, _id }) => {
                return (
                  <tr key={_id}>
                    <td className="text-left py-3 px-4"> {name} </td>
                    <td className="text-left py-3 px-4"> {email}</td>
                    <td className="text-left py-3 px-4">
                      {isAdmin ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Admin</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">User</span>
                        </span>
                      )}
                    </td>
                    <td className="text-left py-3 px-4">
                      <button
                        className="hover:text-blue-500"
                        onClick={() => dispatch(changeAdminStatus(_id))}
                      >
                        {isAdmin ? "Remove Admin" : "Make Admin"}
                      </button>
                    </td>
                    <td className="text-left py-3 px-4">
                      <button
                        className="hover:text-red-500"
                        onClick={() => dispatch(deleteUser(_id))}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserScreen;
