var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");


const connectionString = 'mongodb+srv://Sravanthi_9339:sravanthi11@cluster0.3x0g1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose = require("mongoose");
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var walnutRouter = require("./routes/walnut");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var addmodsRouter = require("./routes/addmods");
var selectorRouter = require("./routes/selector");
//var Costume = require("./models/walnut");
var resourceRouter = require('./routes/resource');
var walnut = require("./models/walnut");

// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await walnut.deleteMany();

  let instance1 = new walnut({
    walnut_type: "round",
    weight: 10,
    cost: 100,
  });
  instance1.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("First object saved");
  });
  let instance2 = new walnut({
    walnut_type: "square",
    weight: 15,
    cost: 200,
  });
  instance2.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("second object saved");
  });
  let instance3 = new walnut({
    walnut_type: "mixed",
    weight: 30,
    cost: 300,
  });
  instance3.save(function (err, doc) {
    if (err) return console.error(err);
    console.log("third object saved");
  });
}

let reseed = true;
if (reseed) {
  recreateDB();
}

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});

app.use("/", indexRouter);
app.use("/walnut", walnutRouter);
app.use("/users", usersRouter);
app.use("/selector", selectorRouter);
app.use("/addmods", addmodsRouter);
//app.use("/costume", costumeRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;