const Express = require("express");
const MyRouter = Express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs").promises; // Import the fs module

const adviser_Details = require("../../../Model/Adviser/Adviser");

const adviser_themeDetails = require("../../../Model/Adviser/adviser_theme/adviser_theme");
const adviser_themeSchema = require("../../../schema/Adviser/adviser_theme/adviser_theme");

// const bcrypt = require('bcrypt');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error("Invalid file type. Only JPEG, PNG, and JPG files are allowed.")
    );
  }
};

var upload = multer({

  storage: storage,
  fileFilter: fileFilter,
  // fileFilter: function(req, file, callback)
});
MyRouter.patch("/Update/:id", upload.single("ImageUrl"), async (req, res) => {
  try {
    const Updateadviser_theme = await adviser_themeDetails.findById(
      req.params.id
    );

    if (!Updateadviser_theme) {
      return res.status(404).send("Adviser theme not found");
    }

    // Store the previous image path for deletion
    const previousImagePath = Updateadviser_theme.ImageUrl;

    // Update fields
    Updateadviser_theme.set({
      name: req.body.name,
      color: req.body.color,
      ImageUrl: req.body.ImageUrl,
      Email: req.body.Email,
      Website: req.body.Website,
      // Adviser_Fk: req.body.Adviser_Fk,
      Phone: req.body.Phone,
      AppPassword: req.body.AppPassword,
      SmtpHost: req.body.SmtpHost,
      SmtpMail: req.body.SmtpMail,
      CompanyName: req.body.CompanyName,
      SmtpPort: req.body.SmtpPort,
      SmtpSecure1: req.body.SmtpSecure1,
    });

    // Update the image if a new one is provided
    if (req.file) {
      // Check if the file with the same name already exists
      const existingFilePath = path.join("uploads", req.file.filename);
      if (await fs.access(existingFilePath).then(() => true).catch(() => false)) {
        // File with the same name exists, generate a new unique filename
        const newFileName = Date.now() + path.extname(req.file.originalname);
        Updateadviser_theme.ImageUrl = path.join("uploads", newFileName);
        await fs.rename(existingFilePath, path.join("uploads", newFileName));
      } else {
        // File doesn't exist, use the provided filename
        Updateadviser_theme.ImageUrl = req.file.path;
      }
    }

    const updatedTheme = await Updateadviser_theme.save();

    // Delete the previous image
    if (previousImagePath && previousImagePath !== Updateadviser_theme.ImageUrl) {
      await fs.unlink(previousImagePath);
    }

    res.send(updatedTheme);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Internal Server Error");
  }
});

MyRouter.post("/Add", upload.single("ImageUrl"), async (req, res) => {
  let Addadviser_theme = new adviser_themeDetails({
    color: req.body.color,
    Email: req.body.Email,
    Website: req.body.Website,
    Adviser_Fk: req.body.Adviser_Fk,
    Phone: req.body.Phone,
    AppPassword: req.body.AppPassword,
    SmtpHost: req.body.SmtpHost,
    SmtpMail: req.body.SmtpMail,
    CompanyName: req.body.CompanyName,
    SmtpPort: req.body.SmtpPort,
    SmtpSecure1: req.body.SmtpSecure1,
  });
  if (req.file) {
    Addadviser_theme.ImageUrl = req.file.path;
  }

  Addadviser_theme = await Addadviser_theme.save();
  res.send(Addadviser_theme);
});




// MyRouter.patch("/Update/:id", upload.single("ImageUrl"), async (req, res) => {
//   const Updateadviser_theme = await adviser_themeDetails.findById(
//     req.params.id
//   );

//   if (!Updateadviser_theme) {
//     return res.status(404).send("Adviser theme not found");
//   }
//   // Store the previous image path for deletion
//   const previousImagePath = Updateadviser_theme.ImageUrl;

//   (Updateadviser_theme.color = req.body.color),
//     (Updateadviser_theme.ImageUrl = req.body.ImageUrl),
//     (Updateadviser_theme.Email = req.body.Email),
//     (Updateadviser_theme.Website = req.body.Website),
//     (Updateadviser_theme.Adviser_Fk = req.body.Adviser_Fk),
//     (Updateadviser_theme.Phone = req.body.Phone),
//     (Updateadviser_theme.AppPassword = req.body.AppPassword),
//     (Updateadviser_theme.SmtpHost = req.body.SmtpHost),
//     (Updateadviser_theme.SmtpMail = req.body.SmtpMail),
//     (Updateadviser_theme.CompanyName = req.body.CompanyName),
//     (Updateadviser_theme.SmtpPort = req.body.SmtpPort),
//     (Updateadviser_theme.SmtpSecure1 = req.body.SmtpSecure1);

//   // Update the image if a new one is provided
//   if (req.file) {
//     Updateadviser_theme.ImageUrl = req.file.path;
//   }

//   try {
//     const C = await Updateadviser_theme.save();

//     // Delete the previous image
//     if (previousImagePath) {
//       await fs.unlink(previousImagePath);
//     }
//     res.send(C);
//   } catch (err) {
//     res.send("Error: " + err);
//   }
// });

MyRouter.delete("/Delete/:id", async (req, res) => {
  const Deleteadviser_theme = await adviser_themeDetails.findById(req.params.id);

  if (!Deleteadviser_theme) {
    return res.status(404).send("Adviser theme not found");
  }
  // Store the previous image path for deletion
  const previousImagePath = Deleteadviser_theme.ImageUrl;
  console.log(Deleteadviser_theme);
  try {
    const C = await Deleteadviser_theme.deleteOne();
    // Delete the previous image
    if (previousImagePath) {
      await fs.unlink(previousImagePath);
    }
    res.send(C);
  } catch (Error) {
    res.send("Error: " + Error);
  }
});

MyRouter.get("/", async (req, res) => {
  const C = await adviser_themeDetails.find();
  try {
    res.send(C);
  } catch (err) {
    res.send("Error: " + err);
  }
});

MyRouter.get("/getOne/:Adviser_Fk", async (req, res) => {
  try {
    const adviser_theme = await adviser_themeDetails.findOne({
      Adviser_Fk: req.params.Adviser_Fk,
    });
    // console.log(adviser_theme);
    // const fullPath = 'uploads\\1702295067947.jpg';
    // const fullPath = adviser_theme.ImageUrl;

    // const filename = fullPath.split("\\").pop();
    // console.log("filename", filename);
    // adviser_theme.ImageUrl = filename;
    res.send(adviser_theme);
  } catch (error) {
    // console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
});

MyRouter.get("/getOneDomain/:Domain", async (req, res) => {
  // console.log("adviser_theme", req.params.CompanyEmail);

  const adviser_Details2 = await adviser_Details.findOne({Domain: req.params.Domain});

  const adviserID= adviser_Details2._id;
  console.log("adviser_theme", adviser_Details2);
  // res.send(adviserID)

  try {
    const adviser_theme = await adviser_themeDetails.findOne({
      Adviser_Fk: adviserID,
    });
    console.log(adviser_theme);
    // const fullPath = 'uploads\\1702295067947.jpg';
    const fullPath = adviser_theme.ImageUrl;

    const filename = fullPath.split("\\").pop();
    console.log("filename", filename);
    adviser_theme.ImageUrl = "http://localhost:7000/uploads/" + filename;
    res.send(adviser_theme);
  } catch (error) {
    console.error("Error: ", error);
    res.status(500).send("Internal Server Error");
  }
});

// image URL updated
// MyRouter.get("/", async (req, res) => {
//   try {
//     const adviser_themes = await adviser_themeDetails.find();

//     // Assuming you have a base URL for your server
//     const baseUrl = "http://localhost:7000";

//     const adviser_themesWithUpdatedUrl = adviser_themes.map(adviser_theme => {
//       const fullPath = adviser_theme.ImageUrl;
//       const filename = fullPath.split("\\").pop();
//       adviser_theme.ImageUrl = `${baseUrl}/uploads/${filename}`;
//       return adviser_theme;
//     });

//     res.json(adviser_themesWithUpdatedUrl);
//   } catch (err) {
//     res.status(500).send("Internal Server Error");
//   }
// });


module.exports = MyRouter;
