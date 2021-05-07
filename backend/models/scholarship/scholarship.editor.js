const mongoose =  require("mongoose");
const ScholarshipEditorSchema = mongoose.Schema({
    HTMLString: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ScholarshipEditor",ScholarshipEditorSchema);