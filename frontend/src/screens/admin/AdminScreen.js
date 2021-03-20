import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Tables from "../../components/Tables";
import Forms from "../../components/Forms";
import "./AdminScreen.css";
const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          <Route exact path="/admin/tables" component={Tables} />
          <Route exact path="/admin/forms" component={Forms} />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
