import React from "react";
import TeamForm from "../../../../components/admin/TeamsForm/TeamForm"
import {teams} from "../TeamScreen/constant";

export const AddTeamForm = ({location}) => {
  return <TeamForm type="Add" team={location.teamname} formData={null} />
}
