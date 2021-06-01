import React from "react";
import GymkhanaForm from "../../../../components/admin/TeamsForm/GymkhanaTeamForm";
import CounsellingForm from "../../../../components/admin/TeamsForm/CounsellingTeamForm";
import NewsacForm from "../../../../components/admin/TeamsForm/NewsacForm";
import VisitartForm from "../../../../components/admin/TeamsForm/VisitartForm";
import HostelForm from "../../../../components/admin/TeamsForm/HostelForm"

export const EditGymkhanaForm = ({ location }) => {
    const { formData } = location;
    return <GymkhanaForm type="Edit" formData={formData} />;
  };
  
  // export default EditGymkhanaScreen;


export const EditCounsellingForm = ({ location }) => {
  const { formData } = location;
  return <CounsellingForm type="Edit" formData={formData} />;
};

// export default EditCounsellingScreen;
export const EditNewsacForm = ({ location }) => {
  const { formData } = location;
  return <NewsacForm type="Edit" formData={formData} />;
};

export const EditVisitartForm = ({ location }) => {
  const { formData } = location;
  return <VisitartForm type="Edit" formData={formData} />;
};

export const EditHostelForm = ({ location }) => {
  const { formData } = location;
  return <HostelForm type="Edit" formData={formData} />;
};
  