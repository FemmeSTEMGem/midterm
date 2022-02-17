// load .env data into process.env
require("dotenv").config();

// Web server config
const PORT = process.env.PORT || 8080;
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const app = express();
const morgan = require("morgan");

const bodyParser = require("body-parser");
const { text } = require("body-parser");
const cookieSession = require("cookie-session");
app.use(cookieSession({ name: "session", secret: "grey-rose-juggling-volcanoes" }));

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

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
const widgetsRoutes = require("./routes/widgets");
const { get } = require("lodash");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
// Note: mount other resources here, using the same pattern above

// // api
// const apiURL1 = 'https://api.tvmaze.com/search/key/shows?q=movies';
// const apiURL2 = 'https://api.tvmaze.com/search/shows?q=books';
// const apiURL3 = 'https://api.tvmaze.com/search/shows?q=restaurants';
// const apiURL4 = 'https://api.tvmaze.com/search/shows?q=';

// const category = movies

// app.get('apiURL4' + category) => {

// }

const getAllUsers = (callback) => {
  db.query('SELECT * FROM users')
  .then((results) => {
    callback(results.rows)
  })
}

app.get("/", (req, res) => {
  getAllUsers((users) => {
    const templateVars = {users}
    res.render("index", templateVars);
  })
});

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

// app.get("/", (req, res) => {
//   res.render("index");
// });


// // form action as to be = /login method = POST
// // all info from the form will be in req.body
// // ***
// app.get("/login", (req, res) => {
//   if (req.session.userID) {
//     res.redirect("/");
//     return;
//   }
//   const templateVars = { user: users[req.session.userID] };
//   res.render("/login", templateVars);
// });


// edit profile is good plz dont touch
app.get("/edit-profile", (req, res) => {
  let templateVars = {user_id: '123'};
  // promise
  // const query = `SELECT * FROM users WHERE users.id = 1`;
  const query = `SELECT * FROM users WHERE users.id = $1`;
  console.log(`userId: ${req.session.user_id}`);
  // check

  if (!req.session.user_id) {
    res.render('login');
  } else {
  db
  .query(query, [req.session.user_id] )
  .then(data => {
    templateVars = data.rows[0];
    res.render('profile', templateVars);
  })
  .catch(e => console.error(e.stack))
  }

})

app.get()


// this post must be implement with what we need to do after profile update

// app.post("/profile", (req, res) => {
//   console.log('profile changed');
//   console.log(body);
// })


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

app.get("/login/:apiURL", (req, res) => {
  res.render()
})
//LOGOUT USER
app.post("/logout", (req, res) => {
req.session = null;

return res.redirect("/");
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


