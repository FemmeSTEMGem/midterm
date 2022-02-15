// create a data in db
const createItem = function(data) {
  console.log("DATA IS INSIDE");
  console.log(data)
  const item = `
  <div class="item">
      <img src="${data.show.image.medium}" />
      <h2>${data.show.name}</h2>
      <h4>${data.show.type}</h4>
  </div>
  `

  return item;
}
// in form
const createItems = (arr) => {
  for (let item of arr) {
      $('#results').append(createItem(item));
  }
}
// in db
const createItems = (arr) => {
  for (let item of arr) {

  }
}
