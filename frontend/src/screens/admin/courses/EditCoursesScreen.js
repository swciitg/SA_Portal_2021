import React from "react";
import CoursesForm from "../../../components/admin/Courses/CoursesForm";

const EditCoursesScreen = ({ location }) => {
  const { formData } = location;
  return <CoursesForm type="Edit" formData={formData} />;
};

export default EditCoursesScreen;
