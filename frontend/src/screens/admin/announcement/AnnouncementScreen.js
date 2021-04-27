import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  listAnnouncement,
  deleteAnnouncement,
} from "../../../actions/announcement";
import { BASEURL } from "../../../constants";

const AnnouncementScreen = () => {
  const announcements = useSelector((state) => state.announcements);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAnnouncement());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Announcements</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/announcements/add`}
        >
          Add Announcements
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
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Title
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Description
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Link
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Important
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
              {announcements.map(
                ({ creation, title, important, description, link, _id }, i) => {
                  return (
                    <tr key={i}>
                      <td className="text-left py-3 px-4">
                        {new Date(creation).getDate() +
                          "/" +
                          (new Date(creation).getMonth() + 1) +
                          "/" +
                          new Date(creation).getFullYear()}
                      </td>
                      <td className="w-1/3 text-left py-3 px-4">{title}</td>
                      <td className="w-1/3 text-left py-3 px-4">
                        {description.substring(0, 80) + "..."}
                      </td>
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
                        {important ? "YES" : "NO"}
                      </td>
                      <td className="text-left py-3 px-4">
                        <Link
                          to={{
                            pathname: `${BASEURL}/admin/announcements/${_id}`,
                            formData: {
                              title,
                              important,
                              description,
                              link,
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
                          onClick={() => dispatch(deleteAnnouncement(_id))}
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

export default AnnouncementScreen;
