import React from "react";
import SchLinksForm from "../../../components/admin/Scholarship/SchLinksForm";

const EditSchlinksScreen = ({ location }) => {
  const { formData } = location;
  return (
    <div>
      <SchLinksForm type="Edit" formData={formData} />
    </div>
  );
};

export default EditSchlinksScreen;
