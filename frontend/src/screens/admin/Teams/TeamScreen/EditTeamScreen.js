import React from "react";
import TeamForm from "../../../../components/admin/TeamsForm/TeamForm"
import {teams} from "../TeamScreen/constant";

export const EditTeamForm = (location) => {
  const { formData } = location.location;
  // console.log(location.location.formData)
  return <TeamForm type="Edit" team={location.location.teamname} formData={formData} />
}