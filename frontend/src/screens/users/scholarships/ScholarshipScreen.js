import React, { useState, useEffect } from "react";
import "./ScholarshipScreen.css";
import { fetchScholarshipEdtr } from "../../../api/index";

function ScholarshipScreen() {
  const [schTables, setSchTables] = useState("");

  useEffect(() => {
    const getTables = async () => {
      try {
        const { data } = await fetchScholarshipEdtr();
        //console.log(data.data);
        data.data && setSchTables(`${JSON.parse(data.data.HTMLString)}`);
      } catch (error) {
        console.log(error);
      }
    };
    getTables();
  }, []);

  useEffect(() => {
    //console.log(schTables);
    document.getElementById("scholarship_tables").innerHTML = schTables;
  }, [schTables]);

  return (
    <div className="container w-full mx-auto p-6 sm:py-12 sm:px-36">
      <p className="py-3 text-2xl font-bold">Ordinances and Rules</p>
      <div id="scholarship_tables" className="w-full"></div>
      <p className="py-6 text-2xl font-bold">Other links....</p>
      <p>cccdcd</p>
    </div>
  );
}

export default ScholarshipScreen;
