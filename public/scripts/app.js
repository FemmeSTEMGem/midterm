// Client facing scripts here

// functions

const appendCategories = function(category) {

  const $singleListElement = $(`
  <div class="task">
    <div class="content">
      <p class="task-text">${category.name}</p>
    </div>
  </div>
  <div class="actions">
    <button type="submit" class="edit">Edit</button>
    <button type="submit" class="delete">Delete</button>
  </div>
  `);
    return $singleListElement;
}

const appendMultipleCategories = function(result) {
  for (let element of result) {
    const $list = appendCategories(element);
    $('#tasks').append($list); // to add it to the page so we can make sure
    // createFieldTable(element);
  }
}

// create a row in db
// const createFieldTable = function(element) {
//   for (let cat in element) {
//     console.log(`cat: ${element[cat]}`);
//     let user_id = 4;
//     Pool.query(`
//       INSERT INTO widgets (entry_text, category, user_id)
//       values ($1, $2, $3), [${cat.name}, ${cat.category}, ${user_id}]`
//     )
//     }
// };
// from Shannon

console.log("Do I work? yes");

// Users: <%=users[0].name %>


const result = [];

const apiURL1 = 'https://api.tvmaze.com/search/key/shows?q=cars';
const apiURL2 = 'https://api.tvmaze.com/search/shows?q=cars';
const apiURL3 = 'https://api.tvmaze.com/search/shows?q=cars';
const apiURL4 = 'https://api.tvmaze.com/search/shows?q=cars';

 // login page - GET
 // redirects to urls index page if already logged in

//  $.get(apiURL1)
//  .then((data) => {
//    console.log('this is work 202020');
//    console.log(data[0].show.image.medium);
//  })
//  .catch(err => {
//        console.log(err.message);
//      });

  // app.get("/login", (req, res) => {
  //   if (req.session.userID) {
  //     res.redirect("/");
  //     return;
  //   }
  //   const templateVars = { user: users[req.session.userID] };
  //   res.render("/login", templateVars);
  // });


// steps in building the app

// check! can we get data by ajax?

/* only execute this script when the document is ready */
$(document).ready(function(){

  /* function called when you click of the button */
  const array = ['#movies', '#restaurants', '#books', '#products' ];

  array.forEach(element => {
    $(element).click(function(){

      const apiURL = 'https://api.tvmaze.com/search/shows?q=cars';
      // to get data out using /fetch/jquery ajax
      $.get(apiURL).then((data) => {
        console.log('this is work 202020');

        // we can loop here for the number of element for the presentation.
        // by here we chose what we need to fetch in show object and put it in result.
        // if i want to read directly in db i have to change the apiURL by the db path in json

        for (let i = 0; i < 10; i++){
          console.log(data[i].show);
          let elem = {
            name: data[i].show.name,
            description: data[i].show.type,
            image: data[i].show.language
          };
          result.push(elem);

        }
            /* this function toggle the visibility of our "li" elements */
          $("li").toggle("slow");
          $('#tasks').empty();
          appendMultipleCategories(result);


      });

      /* this function toggle the visibility of our "li" elements */
    //   $("li").toggle("slow");
    // $('#tasks').empty();
    // appendMultipleCategories(result);
    });

  });

});




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


// const promise1 = app.get(url) for film
// const promise2 = app.get(url) for restaurants
// const promise3 = app.get(url) for books
// const promise4 = app.get(url) for products

// promise.all([promise1, promise2, promise3, promise4])
//    .then(all => {
//     console.log(`all 1; ${all[0].data}`);
//     console.log(`all 2; ${all[0].data}`);
//     console.log(`all 3; ${all[0].data}`);
//     console.log(`all 4; ${all[0].data}`);
// })
//   .catch(err => {
//     console.log(err.message);
//   })
//   .finally(rs => {
//     pool.end();
//   });

// get my api URL
//////////////////////////////////
// const apiURL = 'https://api.tvmaze.com/search/shows?q=cars';
// // to get data out using /fetch/jquery ajax
// $.get(apiURL).then((data) => {
//   console.log('this is work 202020');
//   console.log(data.show);
// });
////////////////////////////////
// for test we need the mock data to avoid to paid the api request.

