import React from "react";
import AnnouncementForm from "../../../components/admin/AnnouncementForm/AnnouncementForm";
const EditAnnouncementScreen = ({ location }) => {
  const { formData } = location;
  return <AnnouncementForm type="Edit" formData={formData} />;
};

export default EditAnnouncementScreen;
