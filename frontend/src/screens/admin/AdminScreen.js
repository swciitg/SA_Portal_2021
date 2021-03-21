import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Tables from "../../components/Tables";
import Forms from "../../components/Forms";
import "./AdminScreen.css";
import ProtectedRoutes from "../../hoc/ProtectedRoutes";
const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          <ProtectedRoutes exact path="/admin/tables" component={Tables} />
          <ProtectedRoutes exact path="/admin/forms" component={Forms} />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
