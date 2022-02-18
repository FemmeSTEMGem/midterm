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



