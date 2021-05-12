const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name : {type : String, required : true},
    imagePath: {type : String, required : true},
    email: {type : String, required : true},
    contactNo : {type: String, required : true},
    role : {type : String, required : true},
    office : {type : String, required : true},
    team : {type : String, required : true},
    priority_number : {type : String, required : true}
});

module.exports = mongoose.model("Team", TeamSchema);