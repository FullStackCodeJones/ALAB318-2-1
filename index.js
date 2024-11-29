const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

<a href="/about">Go to About</a>;

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));
