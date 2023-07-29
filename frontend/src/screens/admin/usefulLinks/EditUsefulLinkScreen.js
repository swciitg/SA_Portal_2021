import React from "react";
import UsefulLinksForm from "../../../components/admin/Useful Links/UsefulLinksForm";
const EditUsefulLinksScreen = ({ location }) => {
  const { formData } = location;
  return <UsefulLinksForm type="Edit" formData={formData} />;
};

export default EditUsefulLinksScreen;
