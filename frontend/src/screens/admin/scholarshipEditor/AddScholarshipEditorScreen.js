import React from "react";
import ScholarshipEditor from "../../../components/admin/Scholarship/ScholarshipEditor";
const AddScholarshipEditorScreen = ({ location }) => {
  const { formData } = location;
  console.log(location.formData);
  return <ScholarshipEditor type="Add" formData={formData} />;
};

export default AddScholarshipEditorScreen;
