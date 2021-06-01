import React from "react";
import CounsellingForm from "../../../../components/admin/TeamsForm/CounsellingTeamForm";
import GymkhanaTeamForm from "../../../../components/admin/TeamsForm/GymkhanaTeamForm";
import NewsacTeamForm from "../../../../components/admin/TeamsForm/NewsacForm";
import VisitartForm from "../../../../components/admin/TeamsForm/VisitartForm";
import HostelForm from "../../../../components/admin/TeamsForm/HostelForm"

export const AddCounsellingForm = () => {
  return <CounsellingForm type="Add" formData={null} />;
};
// export default AddCounsellingScreen;

export const AddGymkhanaForm = () => {
  return <GymkhanaTeamForm type="Add" formData={null} />;
};

export const AddNewsacForm = () => {
  return <NewsacTeamForm type="Add" formData={null} />;
};

export const AddVisitartForm = () => {
  return <VisitartForm type="Add" formData={null} />;
};

export const AddHostelForm = () => {
  return <HostelForm type="Add" formData={null} />;
};
// export default AddGymkhanaScreen;