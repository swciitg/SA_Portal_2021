const Achievement = require("../models/achievement");
const factory=require("./handlerFactory");
const feed= require("feed-read");

exports.getAchievements=factory.getAll(Achievement);


exports.postAchievements=async (req, res) => {
    try {
        const username=req.body.username;
     var mediumProfileUrl="https://"+username+".medium.com/feed";

     feed(mediumProfileUrl,async (err,achievements)=>{
         if(err)
         res.send(err);

         const allDocs=await Achievement.find({});

    await Achievement.deleteMany({});

         achievements.forEach(async (achievement)=>{
            const doc = await Achievement.create(achievement);

         })
         
    res.status(201).json({
      status: 'success',
      data: {
        data: allDocs,
      },
    });
     });
    } catch (error) {
      console.log(error.message);
    }
  };