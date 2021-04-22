import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import Tables from "../../components/admin/Tables/Tables";
import Forms from "../../components/admin/Forms/Forms";
import "./AdminScreen.css";
import ProtectedRoutes from "../../hoc/ProtectedRoutes";
import { BASEURL } from "../../constants/index";
import AnnouncementScreen from "./announcement/AnnouncementScreen";

const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/tables`}
            component={Tables}
          />
          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/forms`}
            component={Forms}
          />

          <ProtectedRoutes
            exact
            path={`${BASEURL}/admin/announcements`}
            component={AnnouncementScreen}
          />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
