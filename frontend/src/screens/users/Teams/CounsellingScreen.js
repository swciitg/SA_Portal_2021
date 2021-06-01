import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    listTeam,
  } from "../../../actions/counsellingteams";
import TeamNav from "./TeamNav";
import {TeamAllCards} from "./TeamUtil";

const CounsellingScreen = () => {
    const teams = useSelector((state) => state.counsellingteam);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listTeam());
    }, [dispatch]);
    console.log(teams);
    return (
        <div>
          <TeamNav />
          <div class="flex flex-wrap justify-center mb-14">
            {TeamAllCards(teams)}
          </div>
        </div>
    );
};
export default CounsellingScreen;