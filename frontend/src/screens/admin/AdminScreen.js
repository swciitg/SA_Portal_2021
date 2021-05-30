import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import "./AdminScreen.css";
import ProtectedRoute from "../../hoc/ProtectedRoute";
import AdminRoute from "../../hoc/AdminRoute";
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
import TeamsScreen from "./Teams/TeamsScreen"
import CounsellingScreen from "./TeamCounselling/CounsellingScreen";
import EditCounsellingScreen from "./TeamCounselling/EditCounsellingScreen";
import AddCounsellingScreen from "./TeamCounselling/AddCounsellingScreen";
import UserScreen from "./users/UserScreen";
import GalleryScreen from "./gallery/GalleryScreen";
import AddGalleryScreen from "./gallery/AddGalleryScreen";
const AdminScreen = () => {
  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        <Switch>
          {/* About Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/about`}
            component={AboutScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/about/add`}
            component={AddAboutScreen}
          />
          {/* Announcement Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/announcements`}
            component={AnnouncementScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/announcements/add`}
            component={AddAnnouncementScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/announcements/:announcement_id`}
            component={EditAnnouncementScreen}
          />

          {/* Forms Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/forms`}
            component={FormScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/forms/add`}
            component={AddFormScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/forms/:form_id`}
            component={EditFormScreen}
          />

          {/* Events Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/events`}
            component={EventScreen}
          />

          <AdminRoute
            exact
            path={`${BASEURL}/admin/events/add`}
            component={AddEventScreen}
          />

          <AdminRoute
            exact
            path={`${BASEURL}/admin/events/:event_id`}
            component={EditEventScreen}
          />

          {/* Scholarship Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/scholarshipEditor`}
            component={ScholarshipEditorScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/scholarshipEditor/add`}
            component={AddScholarshipEditorScreen}
          />

          {/* Rules Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/rules`}
            component={RulesScreen}
          />

          <AdminRoute
            exact
            path={`${BASEURL}/admin/rules/add`}
            component={AddRulesScreen}
          />

          <AdminRoute
            exact
            path={`${BASEURL}/admin/rules/:rule_id`}
            component={EditRulesScreen}
          />

          {/* Courses Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/courses`}
            component={CoursesScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/courses/:rule_id`}
            component={EditCoursesScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/courses/add`}
            component={AddCoursesScreen}
          />

          {/* Scholarship Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/scholarshipLinks`}
            component={ScholarshipLinksScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/scholarshipLinks/add`}
            component={AddSchlinksScreen}
          />

          <AdminRoute
            exact
            path={`${BASEURL}/admin/scholarshipLinks/:scholarshipLinks_id`}
            component={EditSchlinksScreen}
          />

          {/* Link Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/utilities`}
            component={UtilitiesScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/utilities/add`}
            component={AddUtilitiesScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/utilities/edit/:link_id`}
            component={EditUtilitiesScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/utilities/:link_id`}
            component={SublinkScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/utilities/:link_id/add`}
            component={AddSublinkScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/utilities/:link_id/edit/:sublink_id`}
            component={EditSublinkScreen}
          />


          {/* Teams routes */}
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/team`}
            component={TeamsScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/team/counselling`}
            component={CounsellingScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/team/counselling/add`}
            component={AddCounsellingScreen}
          />
          <ProtectedRoute
            exact
            path={`${BASEURL}/admin/team/counselling/:counselling_id`}
            component={EditCounsellingScreen}
          />          

          {/* User Routes */}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/users`}
            component={UserScreen}
          />

          {/*Gallery Routes*/}
          <AdminRoute
            exact
            path={`${BASEURL}/admin/gallery`}
            component={GalleryScreen}
          />
          <AdminRoute
            exact
            path={`${BASEURL}/admin/gallery/add`}
            component={AddGalleryScreen}
          />
        </Switch>
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
