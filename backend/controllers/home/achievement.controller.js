const Achievement = require("../../models/home/achievement");
const factory=require("../handlerFactory");
const fs = require("fs");


exports.getAchievements=async (req, res, next) => {
  try {
    let query = Achievement.find({});
    const doc = await query;
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postAchievement=async (req, res) => {
    try {
      const { title, description, link } = req.body;
    const img = req.file.filename;
    
    const newAchievement = new Achievement({ title, description, link, img });
    const achievement = await newAchievement.save();

    if (achievement) return res.status(200).json({ status: "Success", data: achievement });
    else res.status(424).json({ status: "Failed", message: "Invalid Data" });
    } catch (error) {
      console.log(error.message);
      return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
    }
  };

  exports.editAchievement = async (req, res) => {
    try {
      const { title, description, link  } = req.body;
      var data;
      if(req.file){
      const img = req.file.filename ;
        data={title,description,link,img}
      }else{
        data= {title,description,link}
      }
      
      
        const id = req.params.id;
        const oldAchievement = await Achievement.findById(id);
        if (req.file) {
          fs.unlinkSync(`${__dirname}/../../uploads/achievements/${oldAchievement.img}`);
        }
  
      const achievement = await Achievement.findByIdAndUpdate(id, data);
      const newAchievement=await Achievement.findById(id);
      if (achievement) return res.status(200).json({ status: "Success", data: newAchievement});
      else res.status(424).json({ status: "Failed", message: "Invalid Data" });
    } catch (error) {
      console.log(error.message);
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  };

  exports.deleteAchievement = async (req, res) => {
    try {
      const id = req.params.id;
      const achievement = await Achievement.findById(id);
  
      
        fs.unlinkSync(`${__dirname}/../../uploads/achievements/${achievement.img}`);
        console.log("successfully deleted /tmp/hello");
      
      await Achievement.findByIdAndRemove(id);
      return res.status(200).json({ status: "Success" });
    } catch (err) {
      // handle the error
      console.log(err);
      return res
        .status(424)
        .json({ status: "Failed", message: "Request failed" });
    }
  };
  