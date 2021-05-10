const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name : {type : String, required : true},
    imagePath: {type : String, required : true},
    email: {type : String, required : true},
    contactNo : {type: String, required : true},
    team : {type : String, required : true},
    role : {
        type : String,
        enum : ["DoSA", "ADoSA-1", "ADoSA-2", "Chairman, SWB", "Chairman, Sports Board", "Chairman, Cultural Board", "Chairman, Technical Board", "Chairman, HAB", "Vice Chairman, HAB (Services)", "Vice Chairman, HAB (Infrastructure)"],
        required : true
    }
});

module.exports = mongoose.model("Team", TeamSchema);