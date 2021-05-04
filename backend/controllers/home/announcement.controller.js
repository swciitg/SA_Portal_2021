const Announcement = require("../../models/home/announcement");
const factory=require("../handlerFactory");

exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({}).sort("-creation");
    res.status(200).json({
        status: 'success',
        data:{
            data:announcements,
        },
    });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.postAnnouncement=factory.createOne(Announcement);

exports.editAnnouncement=factory.updateOne(Announcement);

exports.deleteAnnouncement = factory.deleteOne(Announcement);