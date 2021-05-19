import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BASEURL } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { listSublinks, deleteSublink } from "../../../actions/utilities";

const SublinkScreen = () => {
  let { link_id } = useParams();
  const dispatch = useDispatch();
  const sublinks = useSelector((state) => state.sublinks);
  console.log(sublinks);
  useEffect(() => {
    dispatch(listSublinks(link_id));
  });
  return (
    <>
      <h1 class="text-3xl text-black pb-6">Sublinks</h1>

      <div class="mt-6">
        <Link
          class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/utilities/${link_id}/add`}
        >
          Add Sublinks
        </Link>
      </div>

      <div class="w-full mt-6 overflow-auto">
        <div class="bg-white">
          <table class="min-w-full leading-normal">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  SubLink Name
                </th>
                <th class="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  URL
                </th>
                <th class="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Edit
                </th>
                <th class="px-5 py-3 border-b-2 text-left text-sm font-semibold uppercase tracking-wider">
                  Delete
                </th>
              </tr>
            </thead>

            <tbody class="text-gray-700">
              {sublinks.map(({ _id, name, url, priority_number }) => {
                return (
                  <tr>
                    <td class="text-left py-3 px-4"> {name} </td>
                    <td class="text-left py-3 px-4">
                      <a
                        class="hover:text-blue-500"
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View
                      </a>
                    </td>
                    <td class="text-left py-3 px-4">
                      <Link
                        class="hover:text-blue-500"
                        to={{
                          pathname: `${BASEURL}/admin/utilities/${link_id}/edit/${_id}`,
                          formData: { name, url, priority_number, _id },
                        }}
                      >
                        Edit
                      </Link>
                    </td>
                    <td class="text-left py-3 px-4">
                      <button
                        class="hover:text-red-500"
                        onClick={() => dispatch(deleteSublink(link_id, _id))}
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

export default SublinkScreen;
