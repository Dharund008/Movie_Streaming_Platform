const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const userRoutes = require("./routes/UserRoutes");

const app = express();


app.use(cors());
app.use(express.json());

module.exports = mongoose.connect("mongodb://127.0.0.1:27017/flixnest",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log("DB connected Successfully");
});
 
app.use("/api/user",userRoutes);


app.listen(5000, ()=>{
    console.log("Server started on port 5000");
});