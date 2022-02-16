// generateRandomString is function for create a new or check a existing email .

const generateRandomString = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  while (randomString.length < 6) {
    randomString += chars[Math.floor(Math.random() * chars.length)];
  }
  return randomString;
};

// email check

const getUserByEmail = (email, database) => {
  for (const user in database) {
    if (database[user].email === email) {
      return database[user];
    }
  }
  return undefined;
};

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
module.exports = { urlsForUser, generateRandomString, getUserByEmail, appendCategories, appendMultipleCategories, createFieldTable };
