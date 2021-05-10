import React from "react";
import RulesForm from "../../../components/admin/Rules/RulesForm";

const EditRulesScreen = ({ location }) => {
  const { formData } = location;
  return <RulesForm type="Edit" formData={formData} />;
};

export default EditRulesScreen;
