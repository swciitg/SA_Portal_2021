import React from "react";
import TeamForm from "../../../../components/admin/TeamsForm/TeamForm";

export const AddTeamForm = ({location}) => {
  return <TeamForm type="Add" team={location.teamname} formData={null} />
}
