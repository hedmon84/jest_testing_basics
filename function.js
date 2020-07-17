const axios = require("axios");
// add in the json package to run background "testwatch": "jest --watchAll"
const functions = {
  add: (num1, num2) => num1 + num2, // es6 function
  isNull: () => null,
  CheckValue: x => x,
  CreateUser: () => {
    const user = { firstName: "Brad" };
    user["lastName"] = "Traversy";
    return user;
  },

  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.data)
      .catch(err => "error"),
};

module.exports = functions;
