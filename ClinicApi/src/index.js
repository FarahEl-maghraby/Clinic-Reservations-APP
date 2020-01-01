const express = require('express')
require('./db/mangoose')
const router = require('./routers/router')
const multer = require("multer");
const path = require('path')
const cors = require('cors')

const publicDir = path.join(__dirname,'../src/public')
const app = express()
app.use(cors())
port = process.env.PORT || 3000
app.use(express.static(publicDir))
app.use(express.json())
app.use(router)
app.use(multer)

/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})

router.post('/url',  upload.single('file'), (req, res) => {
  // the file is uploaded when this route is called with formdata.
  // now you can store the file name in the db if you want for further reference.
  const filename = req.file.filename;
  const path = req.file. path;
  // Call your database method here with filename and path
  res.json({'message': 'File uploaded'});
});*/

app.listen(port)