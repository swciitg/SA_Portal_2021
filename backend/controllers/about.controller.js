const About = require("../models/about");


//will add priority_number logic later

exports.getAbout = async (req, res) => {
    try{
        const AboutInfo = await About.find({});
        AboutInfo.sort((a, b) => (a.priority_number > b.priority_number ? 1 : -1));

        return res.status(200).json({status:"Success", data: AboutInfo});
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}
exports.postAbout = async (req, res) => {
    try{
        const {title,description,imgPath} = req.body;
        const priority_number = 0;
        const newAboutInfo = new About({title,description,imgPath,priority_number});
        const aboutInfo = await newAboutInfo.save();
        if(aboutInfo) return res.status(200).json({ status: "Success", data: aboutInfo });
        else res.status(424).json({status:"Failed", message:"Invalid Data"});
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}
exports.deleteAbout = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedAboutInfo = await About.findByIdAndDelete(id);
        if(deletedAboutInfo) return res.status(200).json({status:"Success", message:"Successfully deleted"});
        else res.status(424).json({status:"Failed", message:"Invalid Data"});
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}
exports.updateAbout = async (req, res) => {
    try{
        const {id} = req.params;
        const {title,description,imgPath} = req.body;
        const priority_number = 0;
        const updatedAboutInfo = await About.findByIdAndUpdate(id,{title,description,imgPath,priority_number});
        if(updatedAboutInfo) return res.status(200).json({ status: "Success", data: updatedAboutInfo });
        else res.status(424).json({status:"Failed", message:"Invalid Data"});
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}