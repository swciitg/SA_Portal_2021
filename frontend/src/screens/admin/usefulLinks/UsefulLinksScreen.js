import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsefulLink, listUsefulLinks } from "../../../actions/useful.links";

const UsefulLinksScreen = () => {
  const links = useSelector((state) => state.usefulLinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsefulLinks());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Useful Links</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/useful-links/add`}
        >
          Add Useful Links
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
              {links.map(({ _id, name, priority_number }) => {
                return (
                  <tr key={_id}>
                    <td className="text-left py-3 px-4"> {name} </td>
                    <td className="text-left py-3 px-4">
                      <Link
                        className="hover:text-blue-500"
                        to={`${BASEURL}/admin/useful-links/${_id}`}
                      >
                        View
                      </Link>
                    </td>
                    <td className="text-left py-3 px-4">
                      <Link
                        to={{
                          pathname: `${BASEURL}/admin/useful-links/edit/${_id}`,
                          formData: {
                            name,
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
                        onClick={() => dispatch(deleteUsefulLink(_id))}
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

export default UsefulLinksScreen;
