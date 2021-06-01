import React from "react";
import SACForm from "../../../components/admin/SAC/SACForm";

const EditSACScreen = ({ location }) => {
  const { formData } = location;
  return <SACForm type="Edit" formData={formData} />;
};

export default EditSACScreen;
