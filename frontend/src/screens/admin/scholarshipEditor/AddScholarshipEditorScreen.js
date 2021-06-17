import React from "react";
import ScholarshipEditor from "../../../components/admin/Scholarship/ScholarshipEditor";
const AddScholarshipEditorScreen = ({ location }) => {
  const { formData } = location;
  return <ScholarshipEditor type="Add" formData={formData} />;
};

export default AddScholarshipEditorScreen;
