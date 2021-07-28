// function functionWithArgs(a,b){
//     return (a + b);
//   }
  
//   console.log(functionWithArgs(1,2));
  
//   console.log(functionWithArgs(7,9));
  
const person = {
  name : {
    first : "sami",
    last : "bumb"
  },
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    return this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.';
  },
  greeting: function() {
    return 'Hi! I\'m ' + this.name.first + '.';
  }


};

console.log(person["name"]);
console.log(person.name["first"]);
console.log(person.age);
console.log(person.interests[1]);
console.log(person.bio());
console.log(person.greeting());

//change age
console.log(person.age = 45);

console.log(person)

//change last name
person["name"]["last"] = "ghita";

console.log(person)

//add new property
person["eyes"] = "blue";

console.log(person)

//add a new property
person["farewell"] = function fare(){
  console.log("byebyebye");
}

//display person object
console.log(person)

//call function farewell
person.farewell();


