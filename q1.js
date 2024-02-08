// call with function inside object

// q -> output?
const age = 10;

var person = {
  name: "Prikshit",
  age: 24,
  getAge: function () {
    return this.age;
  },
};

var person2 = {
  age: 28,
};

console.log(person.getAge.call(person2));
