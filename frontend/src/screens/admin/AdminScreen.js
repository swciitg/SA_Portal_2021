import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import "./AdminScreen.css";
import ProtectedRoute from "../../hoc/ProtectedRoute";
import { BASEURL } from "../../constants/index";
import AnnouncementScreen from "./announcement/AnnouncementScreen";
import AddAnnouncementScreen from "./announcement/AddAnnouncementScreen";
import EditAnnouncementScreen from "./announcement/EditAnnouncementScreen";
import FormScreen from "./form/FormScreen";
import AddFormScreen from "./form/AddFormScreen";
import EditFormScreen from "./form/EditFormScreen";
import ScholarshipEditorScreen from "./scholarshipEditor/ScholarshipEditorScreen";
import AddScholarshipEditorScreen from "./scholarshipEditor/AddScholarshipEditorScreen";
import ScholarshipLinksScreen from "./scholarshipLinks/ScholarshipLinksScreen";
import AddSchlinksScreen from "./scholarshipLinks/AddSchlinksScreen";
import EditSchlinksScreen from "./scholarshipLinks/EditSchlinksScreen";
import EventScreen from "./event/EventScreen";
import AddEventScreen from "./event/AddEventScreen";
import EditEventScreen from "./event/EditEventScreen";
import AboutScreen from "./about/AboutScreen";
import AddAboutScreen from "./about/AddAboutScreen";
import RulesScreen from "./rules/RulesScreen";
import AddRulesScreen from "./rules/AddRulesScreen";
import EditRulesScreen from "./rules/EditRulesScreen";
import CoursesScreen from "./courses/CoursesScreen";
import AddCoursesScreen from "./courses/AddCoursesScreen";
import EditCoursesScreen from "./courses/EditCoursesScreen";
import UtilitiesScreen from "./utilities/UtilitiesScreen";
import AddUtilitiesScreen from "./utilities/AddUtilitiesScreen";
import EditUtilitiesScreen from "./utilities/EditUtilitiesScreen";
import SublinkScreen from "./utilities/SublinkScreen";
import AddSublinkScreen from "./utilities/AddSublinkScreen";
import EditSublinkScreen from "./utilities/EditSublinkScreen";
import UserScreen from "./users/UserScreen";
const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          {/* About Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/about`}
            component={AboutScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/about/add`}
            component={AddAboutScreen}
          />
          {/* Announcement Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/announcements`}
            component={AnnouncementScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/announcements/add`}
            component={AddAnnouncementScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/announcements/:announcement_id`}
            component={EditAnnouncementScreen}
          />

          {/* Forms Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/forms`}
            component={FormScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/forms/add`}
            component={AddFormScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/forms/:form_id`}
            component={EditFormScreen}
          />

          {/* Events Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/events`}
            component={EventScreen}
          />

          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/events/add`}
            component={AddEventScreen}
          />

          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/events/:event_id`}
            component={EditEventScreen}
          />

          {/* Scholarship Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/scholarshipEditor`}
            component={ScholarshipEditorScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/scholarshipEditor/add`}
            component={AddScholarshipEditorScreen}
          />

          {/* Rules Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/rules`}
            component={RulesScreen}
          />

          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/rules/add`}
            component={AddRulesScreen}
          />

          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/rules/:rule_id`}
            component={EditRulesScreen}
          />

          {/* Courses Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/courses`}
            component={CoursesScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/courses/:rule_id`}
            component={EditCoursesScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/courses/add`}
            component={AddCoursesScreen}
          />

          {/* Scholarship Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/scholarshipLinks`}
            component={ScholarshipLinksScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/scholarshipLinks/add`}
            component={AddSchlinksScreen}
          />

          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/scholarshipLinks/:scholarshipLinks_id`}
            component={EditSchlinksScreen}
          />

          {/* Link Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/utilities`}
            component={UtilitiesScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/utilities/add`}
            component={AddUtilitiesScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/utilities/edit/:link_id`}
            component={EditUtilitiesScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/utilities/:link_id`}
            component={SublinkScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/utilities/:link_id/add`}
            component={AddSublinkScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/utilities/:link_id/edit/:sublink_id`}
            component={EditSublinkScreen}
          />

          {/* User Routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/users`}
            component={UserScreen}
          />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
