const Announcement = require("../../models/home/announcement");
const Category = require("../../models/home/category");

const factory=require("../handlerFactory");

exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find({}).sort("-creation");

    var categories = await Category.find({});
    
    res.status(200).json({
      status: 'success',
      data:{
          announcements,
          categories
      },
  });
  } catch (error) {
    console.log(error.message);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.findAnnouncement = async (req, res) => {
  try {
    const val1 = req.body.category;
    const announcements = await Announcement.find({
      
         category: val1 ,
      
    }).sort("-creation");
    var categories = await Category.find({});
    
    res.status(200).json({
      status: 'success',
      data:{
          announcements,
          categories
      },
  });
  } catch (error) {
    console.log(error.message);
  }
};

exports.postAnnouncement = async (req, res, next) => {
  try {

    var { title, description, category, link } = req.body;
    let name = category.toLowerCase();

    const doc = await new Announcement({title,
      description,
      category: name,
      link,}).save();

    const savedCategory = await Category.find({ name: name });
    if (savedCategory.length == 0) {
      const newCategory = new Category({ name });
      await newCategory.save();
    }
    res.status(201).json({
      status: "success",
      data: doc,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(424)
      .json({ status: "Failed", message: "Request failed" });
  }
};

exports.getCategories=factory.getAll(Category);



exports.editAnnouncement=factory.updateOne(Announcement);

exports.deleteAnnouncement = factory.deleteOne(Announcement);