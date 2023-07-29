import React from "react";
import UsefulSublinksForm from "../../../components/admin/Useful Links/UsefulLinksSublinksForm";
const EditUsefulSublinkScreen = ({ location }) => {
  const { formData } = location;
  return <UsefulSublinksForm type="Edit" formData={formData} />;
};

export default EditUsefulSublinkScreen;
