import React from "react";
import SacForm from "../../../components/admin/SAC/SACForm";
const EditSacScreen = ({ location }) => {
  const { formData } = location;
  return <SacForm type="Edit" formData={formData} />;
};

export default EditSacScreen;
