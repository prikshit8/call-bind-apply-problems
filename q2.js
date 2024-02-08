const phones = [
  {
    company: "apple",
    name: "iPhone",
  },
  {
    company: "samsung",
    name: "galaxy",
  },
];

function printPhones(i) {
  this.print = function () {
    console.log("#" + i + " " + this.company + ": " + this.name);
  };
  this.print();
}

for(let i=0;i<phones.length;i++){
    printPhones.call(phones[i],i);
}
