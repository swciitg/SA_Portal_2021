import React from "react";
import AchievementForm from "../../../components/admin/AchievementForm/AchievementForm";

const EditAchievementScreen = ({ location }) => {
  const { formData } = location;
  return <AchievementForm type="Edit" formData={formData} />;
};

export default EditAchievementScreen;
