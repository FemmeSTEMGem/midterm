// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for
//          client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
}));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);

app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const listItemsRoutes = require("./routes/list_items");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/list_items", listItemsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// const getAllUsers = (callback) => {
//   db.query('SELECT * FROM users')
//   .then((results) => {
//     callback(results.rows)
//   })
// }

// app.get("/", (req, res) => {
//   getAllUsers((users) => {
//     const templateVars = {users}
//     res.render("index", templateVars);
//   })
// });

// Users: <%=users[0].name %> - this is for the .ejs file


// const getListItemsByCategory = (callback) => {
//   db.query(`SELECT * FROM list_items WHERE category = to_watch`)
//   .then((results) => {
//     callback(results.rows)
//   })
// }

// app.get("/categories", (req, res) => {
//   getListItemsByCategory((list_items) => {
//     const templateVars = {list_items}
//     res.render("categories", templateVars)
//   })
// }) //watch/eat/read/buy

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login")
});

//LOGIN USER
app.post("/login", (req, res) => {
  req.session.user_id = 1
  return res.redirect("/")
})

//LOGOUT USER
app.post("/logout", (req, res) => {
  req.session = null;

  return res.redirect("/");
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
