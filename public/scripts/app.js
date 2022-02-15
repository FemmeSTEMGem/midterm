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

// for to be able to use POST
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

// functions
// const {
//   getUserByEmail,
//   urlsForUser,
//   generateRandomString,
// } = require("./helpers");

///////////////// on top is the dependencies ///////////

// check if it work by console.log()
// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'vagrant',
//   password: '123',
//   host: 'localhost',
//   database: 'midterm'
// });

console.log("Do I work? yes");

const result = [
  {
  description: "2018 film",
  name: "Jurassic World I: Fallen Kingdom",
  image: {
    url: "https://commons.wikimedia.org/wiki/File:Jurassic_World_Fallen_Kingdom_Japan_Premiere_Red_Carpet_Chris_Pratt_%26_Bryce_Dallas_Howard_(29233763308).jpg",
    contentUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTb0DdcG6fVdyaEpR2ircvRww0gUzeVG5GYZW-hV4CmlMW4GDWn"
  }
  },
  {
    description: "2018 film",
    name: "Jurassic World II: Fallen Kingdom",
    image: {
      url: "https://commons.wikimedia.org/wiki/File:Jurassic_World_Fallen_Kingdom_Japan_Premiere_Red_Carpet_Chris_Pratt_%26_Bryce_Dallas_Howard_(29233763308).jpg",
      contentUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTb0DdcG6fVdyaEpR2ircvRww0gUzeVG5GYZW-hV4CmlMW4GDWn"
    }
  },
  {
      description: "2018 film",
      name: "Jurassic World III: Fallen Kingdom",
      image: {
        url: "https://commons.wikimedia.org/wiki/File:Jurassic_World_Fallen_Kingdom_Japan_Premiere_Red_Carpet_Chris_Pratt_%26_Bryce_Dallas_Howard_(29233763308).jpg",
        contentUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTb0DdcG6fVdyaEpR2ircvRww0gUzeVG5GYZW-hV4CmlMW4GDWn"
      }
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

// check! can we get data by ajax?

const appendCategories = function(category) {
  const $singleListElement = $(`
  <div class="task">
    <div class="content">
      <p class="task-text">${category.name}</p>
    </div>
  </div>
  <div class="actions">
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  </div>
  `);
    return $singleListElement;
}

//   <div class="categorie">
//   <div class="categorie">
//     <img
//     class="categorie-img"
//     src="${movie.image}" alt="film image" width="250" height="250"/>
//     <div class="movie--info">
//       <h1>${movie.title}</h1>
//       <h2>${movie.genres}</h2>
//       <h3>${movie.premiered}</h3>
//       <div class="list-content">
//       ${$("<p>")
// .text(movie.description)
// .html()}
//     </div>
//     </div>
//   </div>
// </div>`)

const appendMultipleCategories = function(result) {
  for (let element of result) {
    const $list = appendCategories(element);
    $('#tasks').prepend($list); // to add it to the page so we can make sure
    // createFieldTable(element);
  }
}

// create a row in db
const createFieldTable = function(element) {
  for (let cat in element) {
    console.log(`cat: ${element[cat]}`);
    let user_id = 4;
    Pool.query(`
      INSERT INTO widgets (entry_text, category, user_id)
      values ($1, $2, $3), [${cat.name}, ${cat.category}, ${user_id}]`
    )
    }
};


// $(() => {
//   console.log('Document ready to go!');
//   appendMultipleCategories(result);

// })

/* only execute this script when the document is ready */
$(document).ready(function(){
  /* function called when you click of the button */
  const array = ['#movies', '#restaurants', '#books', '#products' ];
  array.forEach(element => {
    $(element).click(function(){
      console.log(`Button: is on`);
      /* this function toggle the visibility of our "li" elements */
      $("li").toggle("slow");

      appendMultipleCategories(result);
    });
  });
});


// // document on ready function
// $(() => {
  // in case of we need to add the categorie in the url we do like this
  // const searchURL = apiURL + item;
  // then the $.get below should be on searchURL instant of apiURL
// to get data out using /fetch/jquery ajax
// GET https://kgsearch.googleapis.com/v1/entities:search
  // appendMultipleCategories(result);

  // $.get(apiURL).then((data) => {
  //   console.log(data);
  //   appendMultipleCategories(data);
  //   // addDb(data);
  // });



  // $('btn1 btn-primary').on(`submit`, (evt) => {
  //   evt.preventDefault();
  //   console.log('HELLO WORLD!');
  //   $('btn1 btn-primary').empty();
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
  //   res.render("/login", templateVars);
  // });


  // $(#logout).on(`submit`, (evt) => {
  //   console.log('logout page');
  // })

  // $()

// });


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


///
//  from shannon

//  about our backend code:
// POST request
// Check if user is logged in - if not, error message
// If user is logged in, push their query into the APIUrl (we'll need a function to replace any spaces with "+"
// Then use the APIUrl to make an API request
// Pull the information we need from the JSON object we receive
// Compare that information against a set of keywords we give it to determine which category it should go into
// Do INSERT INTO to push the information into our database (using $1, $2, etc. to keep our database safe)
