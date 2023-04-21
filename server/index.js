if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");

app.use(cors());

const { catchAsyncError, ExpressError } = require("./middleware");
const adminDashboard = require("./models/admin_dashboard");

const dburl = "mongodb://localhost:27017/home_page";

mongoose
  .connect(dburl)
  .then(async () => {
    const home = await adminDashboard.findOne({name: 'home'});
    if(!home){
      const newHome = new adminDashboard({name: 'home', value: ''});
      await newHome.save();
    }
    const event = await adminDashboard.findOne({name: 'event'});
    if(!event){
      const newEvent = new adminDashboard({name: 'event', value: ''});
      await newEvent.save();
    }
    console.log("MongoDB Connection Succeeded.")
  })
  .catch((err) => console.log("Error in DB connection: " + err));

// Sanitization
app.use(mongoSanitize()); // To remove prohibited characters

app.use(
  express.json({
    limit: "10mb",
  })
);

app.get(
  "/getdata",
  catchAsyncError(async (req, res) => {
    const { dashboardName } = req.query;
    const reqObj = await adminDashboard.findOne({ name: dashboardName });
    return res.send({data: reqObj});
  })
);

app.post(
  "/update",
  catchAsyncError(async (req, res) => {
    const { name, value, password } = req.body;
    console.log(name, value, password);
    if (password !== process.env.PASSWORD) {
      next(new ExpressError("Wrong password !!", 401))
    }

    const reqObj = await adminDashboard.findOne({ name });
    reqObj.value = value;
    await reqObj.save();
    return res.send({ msg: "Updated successfully !" });
  })
);

//404 ROUTE:
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found!", 404));
});

app.use((err, req, res, next) => {
  console.log("err = ", err);
  if (!err.status) err.status = 500;
  if (!err.message) err.message = "Something went wrong!";
  res.send({ msg: err });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`LISTENING ON PORT ${port}!`);
});
