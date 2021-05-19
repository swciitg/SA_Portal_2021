import React from "react";
import UtilitiesForm from "../../../components/admin/UtilitiesForm/UtilitiesForm";
const EditUtilitiesScreen = ({ location }) => {
  const { formData } = location;
  return <UtilitiesForm type="Edit" formData={formData} />;
};

export default EditUtilitiesScreen;
