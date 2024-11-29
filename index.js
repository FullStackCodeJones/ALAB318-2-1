const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/user/:id", (req.res) => {
    res.send(`User ID: ${req.params.id}`);
});

app.use((req, res, next) =>{
    console.log(`${req.method} request for ${req.url}`);
    next();
});

app.listen(3000);
