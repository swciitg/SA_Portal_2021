import React from "react";
import Forms from "../../../components/admin/Forms/Forms";

const EditFormScreen = ({ location }) => {
  const { formData } = location;
  return <Forms type="Edit" formData={formData} />;
};

export default EditFormScreen;
