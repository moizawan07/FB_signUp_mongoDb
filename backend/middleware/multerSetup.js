const multer = require('multer')

// 1. Define Storage Strategy
const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "./public/uploads/"); // Folder jahan image store hogi
  },
  
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + "-" + file.originalname
    console.log('unique name', uniqueName);
    
    cb(null, uniqueName); // File ka naam set kar diya
  },
});


// 2. Create Upload Middleware
const upload = multer({ storage });

module.exports= upload
