import React from "react";
import EventForm from "../../../components/admin/EventForm/EventForm";

const EditEventScreen = ({ location }) => {
  const { formData } = location;
  return <EventForm type="Edit" formData={formData} />;
};

export default EditEventScreen;
