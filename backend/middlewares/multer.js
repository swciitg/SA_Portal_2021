const multer = require("multer");
const dirname = require("../dirname");
const path = require("path");
/**
 * Multer Middleware
 */
// Set The Storage Engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dir = dirname.dirpath + "/assets/events/thumbnails";
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init Upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("image");

// Check File Type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

exports.thumbnailImageUploadMiddleware = async (req, res, next) => {
  //thumbnail image for the event, upload implementation using multur
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      return next(err);
    } else {
      console.log(req.file);
      if (req.file) {
        console.log("thumbnail is uploaded successfully");
        return next();
      } else {
        console.log("something went wrong when uploading the file");
        return next();
      }
    }
  });
};
