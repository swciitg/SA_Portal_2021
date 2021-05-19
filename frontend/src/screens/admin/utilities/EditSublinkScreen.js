import React from "react";
import SublinksForm from "../../../components/admin/UtilitiesForm/SublinksForm";
const EditSublinkScreen = ({ location }) => {
  const { formData } = location;
  return <SublinksForm type="Edit" formData={formData} />;
};

export default EditSublinkScreen;
