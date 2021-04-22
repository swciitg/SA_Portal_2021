import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAnnouncement } from "../../../actions/announcement";
import AnnouncementForm from "../../../components/admin/AnnouncementForm/AnnouncementForm";

const AnnouncementScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAnnouncement());
  }, [dispatch]);

  const editAnnouncementHandler = (title, important, description, link) => {};

  const deleteAnnouncementHandler = () => {};

  const addAnnouncementHandler = () => {};

  const announcements = [
    { important: false, title: "ABC", creation: 1519211809934 },
    { important: true, title: "XYZ", creation: 1519711809934 },
  ];

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Announcements</h1>

      <div className="mt-6">
        <a
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          href="/hab/admin/announcement/add"
        >
          Add Announcements
        </a>

        <AnnouncementForm type="Add" formData={null} />
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
                ({ title, important, description, link }, i) => {
                  return (
                    <tr key={i}>
                      <td className="text-left py-3 px-4">
                        {/* {announcement.creation.getFullYear() +
                          "/" +
                          (announcement.creation.getMonth() + 1) +
                          "/" +
                          announcement.creation.getDate()} */}
                        2/2/2
                      </td>
                      <td className="w-1/3 text-left py-3 px-4">{title}</td>
                      <td className="text-left py-3 px-4">
                        {important ? "YES" : "NO"}
                      </td>
                      <td className="text-left py-3 px-4">
                        <button
                          onClick={() =>
                            editAnnouncementHandler(
                              title,
                              important,
                              description,
                              link
                            )
                          }
                        >
                          Edit
                        </button>
                      </td>
                      <td className="text-left py-3 px-4">
                        <button className="hover:text-red-500">Delete</button>
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
