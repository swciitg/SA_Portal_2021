import React from "react";

const Table = ({ formno, subject, format, date, time }) => {
  return (
    <div>
      <table
        className="table-fixed w-full md:mx-5 my-5 text-center"
        style={{ "box-shadow": "rgba(0, 0, 0, 0.25) 0px 5px 15px" }}
      >
        <tbody className="ls">
          <tr className="my-5">
            <td className=" w-1/8 ds">{formno}</td>
            <td className="w-1/2 p-1 ds">{subject}</td>
            <td className="w-1/8 p-1 ds">{format}</td>
            <td className="w-1/8 p-1 ds">{date}</td>
            <td className="w-1/8 p-1">{time}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
