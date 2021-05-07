const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema({
    HTMLString: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("About",AboutSchema);
