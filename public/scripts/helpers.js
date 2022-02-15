
// render tweet function
const renderLists = function(data) {
  data.forEach(element => {
    // createTweetElement(element);
    const $list = createListElement(element);
    $('#lists-container').prepend($list); // to add it to the page so we can make sure
  });

};

// create element function
const createListElement = function(listData) {
  const { user, content, created_at } = listData;
  let singleListElement = $(`<article class="list-component">
        <!-- image-username-refkey -->
        <div class="image-username-refkey">
          <div class="image-username">
            <img src=${user.avatars} alt="" />
            <span>${user.name}</span>
          </div>
          <div>${user.handle}</div>
          </div>
        <!-- tweet contect -->
        <div class="list-content">
          ${$("<p>")
    .text(content.text)
    .html()}
        </div>
        <!-- footer like we gonna decided icons -->
        <div class="time-reactions">
          <p>${timeago.format(created_at)}</p>
          <div class="icons">
            <i class="submit fas fa-flag"></i>
            <i class="submit fas fa-retweet"></i>
            <i class="submit fas fa-heart"></i>
          </div>
        </div>
      </article>`);
  return singleListElement;

};

// urlsForUser function is for checking the user in DB
const urlsForUser = (id, database) => {
  let userUrls = {};

  for (const shortURL in database) {
    if (database[shortURL].userID === id) {
      userUrls[shortURL] = database[shortURL];
    }
  }

  return userUrls;
};
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

module.exports = { urlsForUser, generateRandomString, getUserByEmail };
