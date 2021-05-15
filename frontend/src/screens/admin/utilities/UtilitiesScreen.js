import React from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";

const UtilitiesScreen = () => {
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Links</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/links/add`}
        >
          Add Links
        </Link>
      </div>

      <div className="w-full mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Link Name
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Sublinks
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Edit
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <tr>
                <td className="text-left py-3 px-4"> link.name </td>
                <td className="text-left py-3 px-4">
                  <a
                    className="hover:text-blue-500"
                    href="/hab/admin/links/<%=link.id%>/sublinks"
                  >
                    View
                  </a>
                </td>
                <td className="text-left py-3 px-4">
                  <a
                    className="hover:text-blue-500"
                    href="/hab/admin/links/<%=link.id%>"
                  >
                    Edit
                  </a>
                </td>
                <td className="text-left py-3 px-4">
                  <form
                    className="mx-2"
                    action="/hab/admin/links/<%=link.id%>?_method=DELETE"
                    method="POST"
                  >
                    <button className="hover:text-red-500">Delete</button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UtilitiesScreen;
