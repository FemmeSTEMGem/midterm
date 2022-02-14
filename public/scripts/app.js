// Client facing scripts here

// Express server is th logic program. The one who communicate with all files in he application.

/*
***************
SETUP         *
FUNCTIONS     *
VARIABLES     *
***************
*/

// APP CONFIG

// const express = require("express");
// const app = express();
// const PORT = 8080; // default port 8080

// // for to be able to use POST
// const bodyParser = require("body-parser");
// const { text } = require("body-parser");
// const { application } = require("express");
// app.use(bodyParser.urlencoded({ extended: true }));

// const cookieSession = require("cookie-session");
// app.use(cookieSession({ name: "session", secret: "grey-rose-juggling-volcanoes" }));

// const bcrypt = require("bcryptjs");
// const password = "purple-monkey-dinosaur"; // found in the req.params object
// const hashedPassword = bcrypt.hashSync(password, 10);

// app.set("view engine", "ejs");

// // functions
// const {
//   getUserByEmail,
//   urlsForUser,
//   generateRandomString,
// } = require("./helpers");

///////////////// on top is the dependencies ///////////

// check if it work by console.log()

console.log("Do I work? yes");

var img = document.createElement("img");
img.src = "matplotlib-grid-02.png";

const movieDb = [
  { id: 1,
    image: '/public/film_image.jpg',
    title: 'power',
    genre: 'drama',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure atque animi voluptatibus eaque voluptatem natus sunt quod illum vitae, harum exercitationem voluptas enim blanditiis?',
    premiered: '2021-02-11'

  },
  { id: 2,
    image: 'image placeholder 2',
    title: 'Hollywood',
    genre: 'comedy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure atque animi voluptatibus eaque voluptatem natus sunt quod illum vitae, harum exercitationem voluptas enim blanditiis?',
    premiered: '2021-02-12'

  },
  { id: 3,
    image: 'image placeholder 3',
    title: 'independence day',
    genre: 'drama',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure atque animi voluptatibus eaque voluptatem natus sunt quod illum vitae, harum exercitationem voluptas enim blanditiis?',
    premiered: '2020-02-23'
  },
  { id: 4,
    image: 'image placeholder 4',
    title: 'Bob le dangereux',
    genre: 'music comedy',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure atque animi voluptatibus eaque voluptatem natus sunt quod illum vitae, harum exercitationem voluptas enim blanditiis?',
    premiered: '2012-02-04'
  }
];

// steps in building the app
// get my api URL
//////////////////////////////////
// const apiURL = 'https://api.tvmaze.com/search/shows?q=cars';
// // to get data out using /fetch/jquery ajax
// $.get(apiURL).then((data) => {
//   console.log('this is work 202020');
//   console.log(data);
// });
////////////////////////////////
// for test we need the mock data to avoid to paid the api request.

// render lists function
// const renderLists = function(movieDb) {
//   movieDb.forEach(element => {
//     // createListElement(element);
//     const $list = createListElement(element);
//     $('#lists-container').prepend($list); // to add it to the page so we can make sure
//   });

// };

// check! can we get data by ajax?

const appendCategories = function(movie) {
  // const defaultImg = 'https://www.pexels.com/photo/gray-mercedez-benz-amg-112460';
  console.log(movie.title);
  const $singleListElement = $(` <div class="categorie">
  <div class="categorie">
    <img
    class="categorie-img"
    src="${movie.image}" alt="film image" width="250" height="250"/>
    <div class="movie--info">
      <h1>${movie.title}</h1>
      <h2>${movie.genres}</h2>
      <h3>${movie.premiered}</h3>
      <div class="list-content">
      ${$("<p>")
.text(movie.description)
.html()}
    </div>
    </div>
  </div>
</div>`)

    // console.log(singleListElement);
    return $singleListElement;
}

const appendMultipleCategories = function(movieDb) {
  for (let movie of movieDb) {
    const $list = appendCategories(movie);
    $('#lists-container').prepend($list); // to add it to the page so we can make sure
  }
}

// write data in db

// const addCategoriesDb = function(data) {
//   for (let cat of categories) {
//     Pool.query(`
//     INSERT INTO
//     FROM data $1
//     WHERE `

//     )
//   }
// }


// // document on ready function
$(() => {
  // in case of we need to add the categorie in the url we do like this
  // const searchURL = apiURL + item;
  // then the $.get below should be on searchURL instant of apiURL
// to get data out using /fetch/jquery ajax
  appendMultipleCategories(movieDb);

  // $.get(apiURL).then((data) => {
  //   console.log(data);
  //   appendMultipleCategories(data);
  //   // addDb(data);
  // });

  // $(#categories).on(`submit`, (evt) => {
  //   evt.preventDefault();
  //   console.log('HELLO WORLD!');
  //   $(#categories).empty();
  //   // get the text from the input field
  //   // append it to the my API URL
  //   // get the new data
  //   // appended to the website
  //   // write the data to the db
  // })

  /// we can use jquery for login with th event listener
  // $(#login).on(`submit`, (evt) => {
  //   console.log('login work');
  // });


  // login page - GET
  // redirects to urls index page if already logged in

  // app.get("/login", (req, res) => {
  //   if (req.session.userID) {
  //     res.redirect("/");
  //     return;
  //   }
  //   const templateVars = { user: users[req.session.userID] };
  //   res.render("show", templateVars);
  // });


  // $(#logout).on(`submit`, (evt) => {
  //   console.log('logout page');
  // })

  // $()

});


// we save data we get in our db
//using this page instruction
// https://www.c-sharpcorner.com/UploadFile/b926a6/data-insert-into-sql-database-using-jquery-ajax-method/

// we  display the data in our web page


// we play with the data in our db following of the need of our client

// we use the edit and delete from our db

// we build a dynamic web page

// login page - GET
// redirects to urls index page if already logged in

// app.get("/login", (req, res) => {
//   if (req.session.userID) {
//     res.redirect("/urls");
//     return;
//   }
//   const templateVars = { user: users[req.session.userID] };
//   res.render("urls_login", templateVars);
// });

// // logging in - POST
// // redirects to urls index page if credentials are valid

// app.post("/login", (req, res) => {
//   const user = getUserByEmail(req.body.email, users);

//   if (user === undefined) {
//     const errorMessage = 'Login credentials not valid. Make sure you are registered.';
//     res.status(401).render('urls_error', {user: users[req.session.userID], errorMessage});
//   };

//   if (user && bcrypt.compareSync(req.body.password, user.password)) {
//     req.session.userID = user.userID;
//     res.redirect('/urls');
//   } else {
//     const errorMessage = 'Login credentials not valid. Please make sure you enter the correct username and password.';
//     res.status(401).render('urls_error', {user: users[req.session.userID], errorMessage});
//   }
// });

// // Logging out - POST
// // clears cookies and redirects to urls index page

// app.post("/logout", (req, res) => {
//   res.clearCookie("session");
//   res.clearCookie("session.sig");
//   res.redirect("/urls");
// });
