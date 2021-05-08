import React from "react";
//import AboutForm from "../../../components/admin/AboutForm/AboutForm";
import AboutFormSun from "../../../components/admin/AboutForm/AboutFormSun";
const AddAboutScreen = ({ location }) => {
  const { formData } = location;
  console.log(location.formData);
  return <AboutFormSun type="Add" formData={formData} />;
};

export default AddAboutScreen;
