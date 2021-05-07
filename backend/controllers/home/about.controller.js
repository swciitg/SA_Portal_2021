const About = require("../../models/home/about");


exports.getAbout = async (req, res) => {
    try{
        const AboutData = await About.findOne({});
        return res.status(200).json({status:"Success", data: AboutData});
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
        await About.deleteMany({});
        const {HTMLString} = req.body;
        const newAboutData = new About({HTMLString});
        const AboutData = await newAboutData.save();
        return res.status(200).json({ status: "Success", data: AboutData });
    }
    catch (err){
        console.log(err);
        return res
            .status(424)
            .json({status:"Failed", message:"Request failed"});
    }
}