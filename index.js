const express = require("express");
const app = express();

const morgan = require("morgan");
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get("/download", (req, res) => {
  res.download("./public/hoodoopictures.jpg"); // Fixed path
});

app.use(express.static("public"));

app.post("/submit", (req, res) => {
  console.log(req.body); // Logs parsed form data
  res.send("Form Submitted! This Contract is Legally Binding🙃");
});

// Start the server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
