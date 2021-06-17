import React from "react";
import TeamForm from "../../../../components/admin/TeamsForm/TeamForm"


export const EditTeamForm = (location) => {
  const { formData } = location.location;
  return <TeamForm type="Edit" team={location.location.teamname} formData={formData} />
}