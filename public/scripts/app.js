// Client facing scripts here

// functions

const appendCategories = function(category) {

  const $singleListElement = $(`
  <div id="tasks">

    <div class="content">
      <p class="task-text" style="width: 200px;"><b>${category}</b></p>
      <button type="submit" class="btn task-edit btn-outline-primary">Edit</button>
      <button type="submit" class="btn task-delete btn-outline-danger">Delete</button>
    </div>
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


console.log("Do I work? yes");

// Users: <%=users[0].name %>


const result = [];


// steps in building the app

// check! can we get data by ajax?

/* only execute this script when the document is ready */
$(document).ready(function(){

  /* function called when you click of the button */
  const array = ['#movies', '#restaurants', '#books', '#products' ];
  const category_name_map = {
    '#movies': 'to_watch',
    '#restaurants': 'to_eat',
    '#books': 'to_read',
    '#products': 'to_buy'
  };

  array.forEach(element => {
    // element can only be #movies or #restaurants...
    $(element).click(function(){

      const apiURL = '/list_items';
      // to get data out using /fetch/jquery ajax
      $.get(apiURL).then((apiResponse) => {
        console.log('this is work 202020');
        console.log(apiResponse);
          $('#tasks').empty();

        // we can loop here for the number of element for the presentation.
        // by here we chose what we need to fetch in show object and put it in result.
        // if i want to read directly in db i have to change the apiURL by the db path in json
        let category_names = [];
        apiResponse.list_items.forEach(item => {

          // let elem = {
          //   name: data[i].itemListElement.name,
          //   description: data[i].itemListElement.type,
          //   image: data[i].itemListElement.language
          // };
          if (item.category === category_name_map[element]) {
            category_names.push(item.entry);
            // item.category can only be
            // to_watch, to_eat, to_read or to_buy
          }

        })

            /* this function toggle the visibility of our "li" elements */
          $("li").toggle("slow");
          appendMultipleCategories(category_names);
      });

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

// how it should be, an api call in ajax.
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
//   params: {s: 'Avengers Endgame', r: 'json', page: '1'},
//   headers: {
//     'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
//     'x-rapidapi-key': '3e0dd86e83mshfd00507d24fcab4p1fbfa8jsn1ec1f1c8d228'
//   }
// };


// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
