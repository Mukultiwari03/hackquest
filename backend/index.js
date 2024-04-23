const express = require("express");
const Student = require("./models/Student");
const app = express();
const cors = require("cors"); 
app.use(cors());

require('dotenv').config();
const PORT = process.env.PORT || 4000;

// cookie-parser - what is this and why we need this?

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json());

require('./config/database').dbConnect();

// route import and mount
const user = require("./routes/user");
app.use("/api/v1",user);

const student = require("./routes/user");
app.use("/api/v1",student)
// activate
app.listen(PORT,()=>{
    console.log(`app is listening at ${PORT}`);
})

app.get("/api/v1/student", async (request, response) => {
    try {
      const students = await Student.find();
      console.log(students);
      response.send(students);
    } catch (error) {
      console.error("Error getting users:", error);
      response.status(500).send("Internal Server Error");
    }
  });
// cookie-parser => what is this and why we need this?