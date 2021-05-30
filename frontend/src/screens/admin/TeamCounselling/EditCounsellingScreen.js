import React from "react";
import CounsellingForm from "../../../components/admin/TeamsForm/CounsellingTeamForm";

const EditCounsellingScreen = ({ location }) => {
  const { formData } = location;
  return <CounsellingForm type="Edit" formData={formData} />;
};

export default EditCounsellingScreen;
