import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from 'moment';
import { BASEAPI } from "../../../constants";

import {
  listEvent,
  deleteEvent,
} from "../../../actions/event";
import { BASEURL } from "../../../constants";

const EventScreen = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listEvent());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Events</h1>

      <div className="mt-6">
        <Link
          className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
          to={`${BASEURL}/admin/events/add`}
        >
          Add Events
        </Link>
      </div>

      <div className="w-auto mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Event Date
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Title
                </th>
                
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Category
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
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
              {events.map(
                (
                  {
                    category,
                    title,
                    eventDate,
                    imgPath,
                    _id,
                  },
                  i
                ) => {
                  return (
                    <tr key={i}>
                      
                      <td className="text-left py-3 px-4">{moment(eventDate).format('DD MMM YYYY')}</td>
                      <td className="text-left py-3 px-4">{title}</td>
                      <td className="text-left py-3 px-4">{category}</td>
                      <td className="text-left py-3 px-4">
                        {/* <a
                          className="hover:text-blue-500"
                          href={imgPath}
                          rel="noreferrer"
                          target="_blank"
                        >
                          Img
                        </a> */}
                        <div>
                          <div>
                              <img style={{'width': '100px', 'height':'100px'}} src={`${BASEAPI}/home/events/${_id}`}
                              alt=" image" />
                          </div>
                        </div>
                      </td>

                      <td className="text-left py-3 px-4">
                        <Link
                          to={{
                            pathname: `${BASEURL}/admin/events/${_id}`,
                            formData: {
                                category,
                                title,
                                eventDate,
                                imgPath,
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
                          onClick={() => dispatch(deleteEvent(_id))}
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

export default EventScreen;
