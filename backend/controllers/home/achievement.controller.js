const Achievement = require("../../models/home/achievement");
const factory = require("../handlerFactory");

exports.getAchievements = factory.getAll(Achievement);

exports.postAchievement = factory.createOne(Achievement);

exports.editAchievement = factory.updateOne(Achievement);

exports.deleteAchievement = factory.deleteOne(Achievement);
