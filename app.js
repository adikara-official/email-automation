var email = require("./index");

let recepients = [
  {
    email: "ali@mrroom.in",
    message: "Hey Ali"
  },
  {
    email: "ask@mrroom.in",
    message: "Hey Abbas"
  }
];

email(recepients);
