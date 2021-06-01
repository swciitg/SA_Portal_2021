import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    listTeam,
  } from "../../../actions/gymkhanateams";
import TeamNav from "./TeamNav";
import {TeamAllCards} from "./TeamUtil";

const GymkhanaScreen = () => {
    const teams = useSelector((state) => state.gymkhanateam);
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
export default GymkhanaScreen;