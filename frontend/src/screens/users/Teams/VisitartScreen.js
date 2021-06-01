import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    listTeam,
  } from "../../../actions/visitartteams";
import TeamNav from "./TeamNav";
import {TeamAllCards} from "./TeamUtil";

const VisitartScreen = () => {
    const teams = useSelector((state) => state.visitartteam);
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
export default VisitartScreen;