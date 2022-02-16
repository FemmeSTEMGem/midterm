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

module.exports = { appendCategories, appendMultipleCategories, createFieldTable };
