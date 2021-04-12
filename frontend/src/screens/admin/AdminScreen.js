import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import Tables from "../../components/admin/Tables/Tables";
import Forms from "../../components/admin/Forms/Forms";
import "./AdminScreen.css";
import ProtectedRoutes from "../../hoc/ProtectedRoutes";
const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          <ProtectedRoutes exact path="/sa/admin/tables" component={Tables} />
          <ProtectedRoutes exact path="/sa/admin/forms" component={Forms} />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
