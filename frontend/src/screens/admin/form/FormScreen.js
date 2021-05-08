import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listForms, deleteForm } from "../../../actions/forms";
import { BASEURL } from "../../../constants";

const FormScreen = () => {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listForms());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Forms</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/forms/add`}
        >
          Add Forms
        </Link>
      </div>

      <div className="w-auto mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Date
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Form No.
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Subject
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Path
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Link
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
              {forms.map(
                ({ formNo, creation, subject, path, link, _id }, i) => {
                  return (
                    <tr key={i}>
                      <td className="text-left py-3 px-4">
                        {new Date(creation).getDate() +
                          "/" +
                          (new Date(creation).getMonth() + 1) +
                          "/" +
                          new Date(creation).getFullYear()}
                      </td>
                      <td className="text-left py-3 px-4">{formNo}</td>
                      <td className="w-1/3 text-left py-3 px-4">{subject}</td>
                      <td className="text-left py-3 px-4">{path}</td>
                      <td className="text-left py-3 px-4">
                        <a
                          className="hover:text-blue-500"
                          href={link}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Link
                        </a>
                      </td>

                      <td className="text-left py-3 px-4">
                        <Link
                          to={{
                            pathname: `${BASEURL}/admin/forms/${_id}`,
                            formData: {
                              creation,
                              subject,
                              path,
                              link,
                              _id,
                              formNo,
                            },
                          }}
                        >
                          <button className="hover:text-blue-500">Edit</button>
                        </Link>
                      </td>
                      <td className="text-left py-3 px-4">
                        <button
                          className="hover:text-red-500"
                          onClick={() => dispatch(deleteForm(_id))}
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

export default FormScreen;
