import React from "react";
import SublinksForm from "../../../components/admin/SAC/SacSublinksForm";
const EditSacSublinkScreen = ({ location }) => {
  const { formData } = location;
  return <SublinksForm type="Edit" formData={formData} />;
};

export default EditSacSublinkScreen;
