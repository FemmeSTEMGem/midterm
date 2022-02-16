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

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/login", (req, res) => {
  res.render("login")
});

app.post("/login", (req, res) => {
  console.log("req.body: ", req.body)
  console.log("req.session: ", req.session)
  res.render("index")
})


// //LOGIN USER
// app.post("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   const user = findUserByEmail(email, users);


//   if (email === "" || password === "") {
//     return res.send('<html><body>404 Error. Email and/or Password was blank.</b></body></html>\n');
//   }

//   if (!user || !bcrypt.compareSync(password, user.password)) {
//     return res.send('<html><body>403 error</b></body></html>\n');
//   }

//   req.session.user_id = user.id;

//   return res.redirect('/urls');

// });



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
