const Team = require("../../models/team/team");
const fs = require("fs");

const teamFromRole = {
    "DoSA" : "Dean",
    "ADoSA-1" : "Dean",
    "ADoSA-2" : "Dean",
    "Chairman, SWB" : "Well Being",
    "Chairman, Sports Board" : "Personality Development",
    "Chairman, Cultural Board" : "Personality Development",
    "Chairman, Technical Board" : "Personality Development",
    "Chairman, HAB" : "Accomomdation and Food",
    "Vice Chairman, HAB (Services)" : "Accomomdation and Food",
    "Vice Chairman, HAB (Infrastructure)" : "Accomomdation and Food"
};

const allTeams = ["Dean", "Well Being", "Personality Development", "Accomomdation and Food"];

exports.getTeam = async (req, res) => {
    try{
        const TeamData = await Team.find({});
        return res.status(200).json({status:"Success", data: TeamData});
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.postTeam = async (req, res) => {
    try{
        if(!req.file){
            return res
                .status(424)
                .json({status:"Failed", message:"No File Provided"});
        }
        const {name, email, contactNo, role} = req.body;
        const imagePath = req.file.filename;
        const team = teamFromRole[role];
        const newTeamData = new Team({name, imagePath, email, contactNo, team, role});
        const TeamData = await newTeamData.save();
        return res.status(200).json({ status: "Success", data: TeamData });
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.editTeam = async (req, res) => {
    try{
        const {id} = req.params;
        const TeamData = await Team.findById(id);
        const {name, email, contactNo, role} = req.body;
        const team = teamFromRole[role];
        let imagePath;
        let data = {name, email, contactNo, team, role};
        if(req.file){
            imagePath = req.file.filename;
            data =  {name, imagePath, email, contactNo, team, role};
        }
        const UpdatedTeamData = await Team.findByIdAndUpdate(id, data);
        if(req.file){
            fs.unlinkSync(`${__dirname}/../../uploads/team/${TeamData.imagePath}`);
        }
        return res.status(200).json({ status: "Success", data: UpdatedTeamData });
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.deleteTeam = async (req, res) => {
    try{
        const {id} = req.params;
        const TeamData = await Team.findById(id);
        const DeletedTeamData = await Team.findByIdAndDelete(id);
        fs.unlinkSync(`${__dirname}/../../uploads/team/${TeamData.imagePath}`);
        return res.status(200).json({ status: "Success", data: DeletedTeamData });
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};