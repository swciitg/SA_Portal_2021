import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    listTeam,
  } from "../../../actions/newsacteams";
import TeamNav from "./TeamNav";
import {TeamAllCards} from "./TeamUtil";

const NewsacScreen = () => {
    const teams = useSelector((state) => state.newsacteam);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTeam());
    }, [dispatch]);
    return (
        <div>
          <TeamNav />
          <div class="flex flex-wrap justify-center mb-14">
            {TeamAllCards(teams)}
          </div>
        </div>
    );
};
export default NewsacScreen;