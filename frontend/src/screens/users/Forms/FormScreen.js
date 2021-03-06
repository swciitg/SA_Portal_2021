import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./FormScreen.css";
import { listForms } from "../../../actions/forms";
import { BASEAPI } from "../../../constants";
const FormScreen = () => {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listForms());
  }, [dispatch]);
  return (
    <div className="container mx-auto p-6 sm:py-12 sm:px-36">
      <div className="flex justify-between w-full mb-4 sm:mb-6">
        <p className="text-2xl sm:text-3xl font-bold">Forms</p>
      </div>
      <table
        className="table-fixed w-full my-4 text-center"
        style={{ "box-shadow": "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
      >
        <tbody className=" h-5 bg-gray-500">
          <tr>
            <td className="w-1/8 p-1  text-white dd">Form No.</td>
            <td className="w-1/2 text-white dd">Subject</td>
            <td className="w-1/8 text-white dd hidden sm:table-cell">Format</td>
            <td className="w-1/8 text-white dd hidden sm:table-cell">Date</td>
            <td className="w-1/8 text-white">Link</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table
          className="table-fixed w-full my-5 text-center"
          style={{ "box-shadow": "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
        >
          <tbody className="ls">
            {forms.map(
              ({ _id, creation, subject, format, formNo, path }, i) => {
                return (
                  <tr key={i}>
                    <td className=" w-1/8 ds">{formNo}</td>
                    <td className="w-1/2  ds">{subject}</td>
                    <td className="w-1/8  ds hidden sm:table-cell">{format}</td>
                    <td className="w-1/8  ds hidden sm:table-cell">
                      {new Date(creation).getDate() +
                        "/" +
                        (new Date(creation).getMonth() + 1) +
                        "/" +
                        new Date(creation).getFullYear()}
                    </td>
                    <td className="w-1/8 ">
                      {path.indexOf("https://") === -1 ? (
                        <a
                          className="hover:text-blue-500 text-blue-500 underline"
                          href={`${BASEAPI}/forms/${_id}`}
                          rel="noreferrer"
                          target="_blank"
                        >
                          View
                        </a>
                      ) : (
                        <a
                          className="hover:text-blue-900 text-blue-500 underline"
                          href={path}
                          rel="noreferrer"
                          target="_blank"
                        >
                          View
                        </a>
                      )}
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormScreen;
