import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listRules, deleteRule } from "../../../actions/rules";
import { BASEURL, BASEAPI } from "../../../constants";

const RulesScreen = () => {
  const rules = useSelector((state) => state.rules);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listRules());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Rules</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/rules/add`}
        >
          Add Rules
        </Link>
      </div>

      <div className="w-auto mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 sm:w-1/2 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Title
                </th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                  Link
                </th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                  Edit
                </th>
                <th className="text-center py-3 px-4 uppercase font-semibold text-sm">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700" id="myMenu">
              {rules.map(({ name, path, link, _id }, i) => {
                return (
                  <tr key={_id}>
                    <td className="text-left py-3 px-4">{name}</td>
                    <td className="text-center py-3 px-4">
                      {path.indexOf("https://") === -1 ? (
                        <a
                          className="hover:text-blue-500"
                          href={`${BASEAPI}/rules/${_id}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          View
                        </a>
                      ) : (
                        <a
                          className="hover:text-blue-500"
                          href={path}
                          rel="noreferrer"
                          target="_blank"
                        >
                          View
                        </a>
                      )}
                    </td>

                    <td className="text-center py-3 px-4">
                      <Link
                        to={{
                          pathname: `${BASEURL}/admin/rules/${_id}`,
                          formData: {
                            path,
                            link,
                            _id,
                            name,
                          },
                        }}
                      >
                        <button className="hover:text-blue-500">Edit</button>
                      </Link>
                    </td>
                    <td className="text-center py-3 px-4">
                      <button
                        className="hover:text-red-500"
                        onClick={() => dispatch(deleteRule(_id))}
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

export default RulesScreen;
