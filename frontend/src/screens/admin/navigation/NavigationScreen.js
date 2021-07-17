import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listNavs } from "../../../actions/navigation";
import { BASEURL } from "../../../constants";
import { boardsArr } from "./constants";
const NavigationScreen = () => {
  const navigations = useSelector((state) => state.navigations);
  const dispatch = useDispatch();

  useEffect(() => {
    //document.title = "Navigation";
    dispatch(listNavs());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-3xl text-black pb-6">Navigation</h1>
      <div className="w-auto mt-6 overflow-auto">
        <div className="bg-white">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Board Name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Add/Edit
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-700" id="myMenu">
              {boardsArr.map(({ board, boardshort }) => {
                return (
                  <tr>
                    <td className="text-left py-3 px-4">{board}</td>
                    <td className="text-left py-3 px-4">
                      <Link
                        to={{
                          pathname: `${BASEURL}/admin/navigation/${boardshort}`,
                          boardname: `${board}`,
                        }}
                      >
                        <p className="hover:text-blue-500">
                          {navigations.find(
                            (nav) => nav.boardShort === boardshort
                          )
                            ? "Edit"
                            : "Add"}
                        </p>
                      </Link>
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

export default NavigationScreen;
