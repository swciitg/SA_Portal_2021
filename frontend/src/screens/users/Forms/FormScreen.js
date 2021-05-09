import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Home/Form/Form";
import "./FormScreen.css";
import { listForms } from "../../../actions/forms";
import { BASEAPI } from "../../../constants";
const FormScreen = () => {
  const forms = useSelector((state) => state.forms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listForms());
  });
  return (
    <div className="container mx-auto px-4 md:px-48 py-5">
      <div
        class="md:ml-10"
        style={{ "font-weight": "600", "font-size": "34px" }}
      >
        Forms
      </div>
      <table
        class="table-fixed w-full md:mx-5 my-4 text-center"
        style={{ "box-shadow": "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
      >
        <tbody class=" h-5 bg-gray-500">
          <tr>
            <td class="w-1/8 p-1  text-white dd">Form No.</td>
            <td class="w-1/2 text-white dd">Subject</td>
            <td class="w-1/8 text-white dd hidden sm:table-cell">Format</td>
            <td class="w-1/8 text-white dd hidden sm:table-cell">Date</td>
            <td class="w-1/8 text-white">Link</td>
          </tr>
        </tbody>
      </table>
      <div>
        <table
          class="table-fixed w-full md:mx-5 my-5 text-center"
          style={{ "box-shadow": "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
        >
          <tbody class="ls">
            {forms.map(
              ({ _id, creation, subject, format, formNo, path }, i) => {
                return (
                  <tr key={i}>
                    <td class=" w-1/8 ds">{formNo}</td>
                    <td class="w-1/2  ds">{subject}</td>
                    <td class="w-1/8  ds hidden sm:table-cell">{format}</td>
                    <td class="w-1/8  ds hidden sm:table-cell">
                      {new Date(creation).getDate() +
                        "/" +
                        (new Date(creation).getMonth() + 1) +
                        "/" +
                        new Date(creation).getFullYear()}
                    </td>
                    <td class="w-1/8 ">
                      {path.indexOf("https://") === -1 ? (
                        <a
                          className="hover:text-blue-500"
                          href={`${BASEAPI}/forms/${_id}`}
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
