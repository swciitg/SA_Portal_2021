import React, { useState, useEffect } from "react";
import "./ScholarshipScreen.css";
import { fetchScholarshipEdtr } from "../../../api/index";
import { useDispatch, useSelector } from "react-redux";
import { listSchLinks } from "../../../actions/schLinks";
import SchLinks from "../../../components/Home/SchLinks/SchLinks";

function ScholarshipScreen() {
  const [schTables, setSchTables] = useState("");

  const schLinks = useSelector((state) => state.schLinks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listSchLinks());
  }, [dispatch]);

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
      <SchLinks schLinks={schLinks} />
    </div>
  );
}

export default ScholarshipScreen;
