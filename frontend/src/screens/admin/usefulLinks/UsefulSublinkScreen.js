import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASEURL } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsefulSublink, listUsefulSublinks } from "../../../actions/useful.links";

const UsefulSublinkScreen = () => {
  let { link_id } = useParams();
  const dispatch = useDispatch();
  const sublinks = useSelector((state) => state.usefulsublinks);
  useEffect(() => {
    dispatch(listUsefulSublinks(link_id));
  });
  return (
    <>
      <h1 className="text-3xl text-black pb-6">Useful Sublinks</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/useful-links/${link_id}/add`}
        >
          Add Useful Sublinks
        </Link>
      </div>

      <div className="w-full mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full leading-normal">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  SubLink Name
                </th>
                <th className="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  URL
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
              {sublinks.map(({ _id, name, url, priority_number }) => {
                return (
                  <tr>
                    <td className="text-left py-3 px-4"> {name} </td>
                    <td className="text-left py-3 px-4">
                      <a
                        className="hover:text-blue-500"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td className="text-left py-3 px-4">
                      <Link
                        className="hover:text-blue-500"
                        to={{
                          pathname: `${BASEURL}/admin/useful-links/${link_id}/edit/${_id}`,
                          formData: { name, url, priority_number, _id },
                        }}
                      >
                        Edit
                      </Link>
                    </td>
                    <td className="text-left py-3 px-4">
                      <button
                        className="hover:text-red-500"
                        onClick={() => dispatch(deleteUsefulSublink(link_id, _id))}
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

export default UsefulSublinkScreen;
