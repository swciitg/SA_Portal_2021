import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BASEURL } from "../../../constants";
import { createNav, editNav } from "../../../actions/navigation";

const NavigationFormScreen = ({ location }) => {
  const { boardname } = location;
  const history = useHistory();
  const dispatch = useDispatch();

  const navs = useSelector((state) => state.navigations);
  const { boardShort } = useParams();
  const boardData = navs && navs.find((el) => el.boardShort === boardShort);
  const type = boardData ? "Edit" : "Add";

  const boardId = boardData && boardData._id;

  const [chairmanName, setChairman] = useState(
    boardData && boardData.chairmanName ? boardData.chairmanName : ""
  );

  const [description, setDescription] = useState(
    boardData && boardData.description ? boardData.description : ""
  );

  const [notices, setNotice] = useState(
    boardData && boardData.notices ? boardData.notices : ""
  );

  const [events, setEvent] = useState(
    boardData && boardData.events ? boardData.events : ""
  );

  const [announcements, setAnnouncement] = useState(
    boardData && boardData.announcements ? boardData.announcements : ""
  );

  const [file, setFile] = useState(
    boardData && boardData.title ? boardData.title : ""
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("path", file);
    formData.append("chairmanName", chairmanName);
    formData.append("boardName", boardname);
    formData.append("boardShort", boardShort);
    formData.append("description", description);
    formData.append("events", events);
    formData.append("announcements", announcements);
    formData.append("notices", notices);


    if (type === "Add") 
      dispatch(createNav(formData)).then(() => {
        history.push(`${BASEURL}/admin/navigation`);
    });
    else 
      dispatch(editNav(boardId, formData)).then(() => {
        history.push(`${BASEURL}/admin/navigation`);
    });
    //window.location.replace(`${BASEURL}/admin/forms`);
  };

  return (
    <>
      <h1 className="text-3xl text-black pb-6">
        {type} {boardname} Nav
      </h1>

      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-1/2 my-6 pr-0 lg:pr-2">
          <div
            className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mt-2"
            role="alert"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
            </svg>
            <p>The link should start with "https://"</p>
          </div>
          <div className="leading-loose">
            <form
              className="p-10 bg-white rounded shadow-xl"
              onSubmit={(e) => formSubmitHandler(e)}
            >
              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="chairman"
                >
                  Chairman Name
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="chairman"
                  name="chairman"
                  type="text"
                  value={chairmanName}
                  onChange={(e) => setChairman(e.target.value)}
                  placeholder="Chairman Name"
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="description"
                  name="description"
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description of Board"
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="chairman"
                >
                  Notices Link
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="notices"
                  name="notices"
                  type="text"
                  value={notices}
                  onChange={(e) => setNotice(e.target.value)}
                  placeholder="Notices Link"
                  required
                />
              </div>

              <div className="mt-2">
                <label className="block text-sm text-gray-600" htmlFor="events">
                  Events Link
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="events"
                  name="events"
                  type="text"
                  value={events}
                  onChange={(e) => setEvent(e.target.value)}
                  placeholder="Events Link"
                  required
                />
              </div>

              <div className="mt-2">
                <label
                  className="block text-sm text-gray-600"
                  htmlFor="announcements"
                >
                  announcements Link
                </label>
                <input
                  className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
                  id="announcements"
                  name="announcements"
                  type="text"
                  value={announcements}
                  onChange={(e) => setAnnouncement(e.target.value)}
                  placeholder="Announcement Link"
                  required
                />
              </div>

              <div className="mt-2">
                <input
                  type="file"
                  name="form"
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder="File"
                  required={type === "Add" ? true : false}
                />
              </div>

              <div className="mt-6">
                <button
                  className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationFormScreen;
