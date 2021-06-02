const Team = require("../../models/team/team");
const dirname = require("../../dirname");
const fs = require("fs");

exports.getTeamMembers = async (req, res) => {
    try{
        const { team } = req.params;
        const TeamMembersData = await Team.find({team : team}).sort("priority_number");
        return res.status(200).json({status:"Success", data: TeamMembersData});
    }
    catch(err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
};

exports.getOneMemberImage = async (req, res) => {
    try{
        const { id } = req.params;
        const Member = await Team.findById(id);
        if(Member) {
            const ImagePath = `${__dirname}/../../uploads/team/${Member.imagePath}`;
            fs.readFile(ImagePath,(err, data) => {
                res.contentType("image/jpeg");
                return res.send(data);
            });
        }
        else{
            return res
                .status(424)
                .json({status:"Failed", message:"Request failed"});
        }
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
        const { team } = req.params;
        const {name, email, contactNo, post, priority_number} = req.body;
        const imagePath = req.file.filename;
        const newTeamData = new Team({name, imagePath, email, contactNo, post, team, priority_number});
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
        const {team, id} = req.params;
        const TeamData = await Team.findById(id);
        const {name, email, contactNo, post, priority_number} = req.body;
        let imagePath;
        let data = {name, email, contactNo, post, team , priority_number};
        if(req.file){
            imagePath = req.file.filename;
            data =  {name, imagePath, email, contactNo, post, team , priority_number};
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