const Team = require("../../models/team/team");
const fs = require("fs");

exports.getAllMembers = async (req, res) => {
    try{
        const AllMembersData = await Team.find({});
        return res.status(200).json({status:"Success", data: AllMembersData});
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};
exports.getOfficeMembers = async (req, res) => {
    try{
        const { office } = req.params;
        const OfficeMembersData = await Team.find({office : office});
        return res.status(200).json({status:"Success", data: OfficeMembersData});
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};
exports.getTeamMembers = async (req, res) => {
    try{
        const { team } = req.params;
        const TeamMembersData = await Team.find({team : team});
        return res.status(200).json({status:"Success", data: TeamMembersData});
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.postMember = async (req, res) => {
    try{
        if(!req.file){
            return res
                .status(424)
                .json({status:"Failed", message:"No File Provided"});
        }
        const {name, email, contactNo, role, office, team, priority_number} = req.body;
        const imagePath = req.file.filename;
        const newTeamData = new Team({name, imagePath, email, contactNo, team, role, office, team , priority_number});
        const MemberData = await newTeamData.save();
        return res.status(200).json({ status: "Success", data: MemberData });
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.editMember = async (req, res) => {
    try{
        const {id} = req.params;
        const TeamData = await Team.findById(id);
        const {name, email, contactNo, role, office, team, priority_number} = req.body;
        let imagePath;
        let data = {name, email, contactNo, team, role, office, team , priority_number};
        if(req.file){
            imagePath = req.file.filename;
            data =  {name, imagePath, email, contactNo, team, role, office, team , priority_number};
        }
        const UpdatedMemberData = await Team.findByIdAndUpdate(id, data);
        if(req.file){
            fs.unlinkSync(`${__dirname}/../../uploads/team/${TeamData.imagePath}`);
        }
        return res.status(200).json({ status: "Success", data: UpdatedMemberData });
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.deleteMember = async (req, res) => {
    try{
        const {id} = req.params;
        const MemberData = await Team.findById(id);
        const DeletedMemberData = await Team.findByIdAndDelete(id);
        fs.unlinkSync(`${__dirname}/../../uploads/team/${MemberData.imagePath}`);
        return res.status(200).json({ status: "Success", data: DeletedMemberData });
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};