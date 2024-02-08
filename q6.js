function checkPassword(success, failed) {
  let password = prompt("password?", "");
  if (password == "frontend") success();
  else failed();
}

let user = {
  name: "prikshit",

  loginSuccessful() {
    console.log(`${this.name} logged in`);
  },
  loginFailed() {
    console.log(`${this.name} failed to log in`);
  },
};

// here issue is we are just passing function defis
// when they are called they are binded with window object
checkPassword(user.loginSuccessful, user.loginFailed);

checkPassword(user.loginSuccessful.bind(user),user.loginFailed.bind(user));
