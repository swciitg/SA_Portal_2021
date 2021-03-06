import React from "react";
import { Switch } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar/Sidebar";
import "./AdminScreen.css";
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


import SacScreen from "./sac/SACScreen";
import AddSacScreen from "./sac/AddSACScreen";
import EditSacScreen from "./sac/EditSACScreen";
import SacSublinkScreen from "./sac/SacSublinkScreen";
import AddSacSublinkScreen from "./sac/AddSacSublinkScreen";
import EditSacSublinkScreen from "./sac/EditSacSublinkScreen";

import TeamsScreen from "./Teams/TeamScreen/TeamScreen";
import { AddTeamForm } from "./Teams/TeamScreen/AddTeamScreen";
import { EditTeamForm } from "./Teams/TeamScreen/EditTeamScreen";
import AllTeamsScreen from "./Teams/AllTeamScreen";

import UserScreen from "./users/UserScreen";
import GalleryScreen from "./gallery/GalleryScreen";
import AddGalleryScreen from "./gallery/AddGalleryScreen";
import AchievementScreen from "./achievement/AchievementScreen";
import AddAchievementScreen from "./achievement/AddAchievementScreen";
import EditAchievementScreen from "./achievement/EditAchievementScreen";
import NavigationScreen from "./navigation/NavigationScreen";
import NavigationFormScreen from "./navigation/NavigationFormScreen";

import { LOGIN_URL } from "../../constants/index";
const AdminScreen = () => {
  let loginBool = document.cookie.includes("sa-portal-session");

  return (
    <div className="bg-gray-100 font-family-karla flex">
      <Sidebar>
        {loginBool ? (
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

            {/* SAC Routes */}
            <AdminRoute
              exact
              path={`${BASEURL}/admin/sac`}
              component={SacScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/sac/add`}
              component={AddSacScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/sac/edit/:link_id`}
              component={EditSacScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/sac/:link_id`}
              component={SacSublinkScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/sac/:link_id/add`}
              component={AddSacSublinkScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/sac/:link_id/edit/:sublink_id`}
              component={EditSacSublinkScreen}
            />


            {/* Courses Routes */}
            <AdminRoute
              exact
              path={`${BASEURL}/admin/courses`}
              component={CoursesScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/courses/add`}
              component={AddCoursesScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/courses/:rule_id`}
              component={EditCoursesScreen}
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

            <AdminRoute
              exact
              path={`${BASEURL}/admin/team`}
              component={AllTeamsScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/team/:team`}
              component={TeamsScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/team/:team/add`}
              component={AddTeamForm}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/team/:team/:team_id`}
              component={EditTeamForm}
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

            {/* Achievements Routes */}
            <AdminRoute
              exact
              path={`${BASEURL}/admin/achievements`}
              component={AchievementScreen}
            />

            <AdminRoute
              exact
              path={`${BASEURL}/admin/achievements/add`}
              component={AddAchievementScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/achievements/:achievement_id`}
              component={EditAchievementScreen}
            />
            {/*Navigation Screen*/}
            <AdminRoute
              exact
              path={`${BASEURL}/admin/navigation`}
              component={NavigationScreen}
            />
            <AdminRoute
              exact
              path={`${BASEURL}/admin/navigation/:boardShort`}
              component={NavigationFormScreen}
            />
          </Switch>
        ) : (
          <div className="h-4/5 flex justify-center items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-center">
                Welcome to SA Portal's Admin Panel.
              </h1>
              <p className="text-xl sm:text-2xl text-center mt-3">
                Please{" "}
                <a href={LOGIN_URL} className="text-blue-500 underline">
                  Login
                </a>
              </p>
            </div>
          </div>
        )}
      </Sidebar>
    </div>
  );
};

export default AdminScreen;
