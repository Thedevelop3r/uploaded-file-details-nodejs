let express = require("express");
let cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
let app = express();
app.use(fileUpload());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});
app.post("/api/fileanalyse", (req, res) => {
  // console.log(req.body.msg);
  console.log(req.files.upfile);
  const uFile = req.files.upfile;
  res.json({
    name: uFile.name,
    type: uFile.mimetype,
    size: uFile.size,
    encoding: uFile.encoding,
    md5: uFile.md5
   
  });

});

const port = process.env.PORT || 9000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
