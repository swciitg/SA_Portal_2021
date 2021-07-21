import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./SACScreen.css";
import { listsacLinks } from "../../../actions/sac";
import LinkCard from "../utilities/LinkCard";

////// This component is using "LinkCard" and its child component "SubLinks"
////// from UtilitiesScreen and any debugging in these need to be done there

const SACScreen = () => {
  const sacs = useSelector((state) => state.sacs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listsacLinks());
  }, [dispatch]);

  useEffect(() => {
    console.log("SACs data", sacs);
  }, [sacs]);

  return (
    <div className="container w-full mx-auto p-6 sm:py-12 sm:px-36">
      <p className="text-2xl sm:text-3xl font-bold mb-6">SAC</p>
      {sacs &&
        sacs.map((sac, idx) => {
          return <LinkCard key={sac._id} details={sac} />;
        })}
    </div>
  );
};

export default SACScreen;
