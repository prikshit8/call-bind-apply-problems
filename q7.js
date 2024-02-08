function checkPassword(success, failed) {
  let password = prompt("password?", "");
  if (password == "frontend") success();
  else failed();
}

let user = {
  name: "prikshit",
  login(result) {
    console.log(this.name + (result ? "login successful" : "login failed"));
  },
};

// here issue is we are just passing function defis
// when they are called they are binded with window object
checkPassword(user.login(true), user.login(false));

checkPassword(user.login.bind(user, true), user.login.bind(user, true));
