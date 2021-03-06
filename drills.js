'use strict';

function createMyObject() {
        return {
        student1: 'Emily',
        student2: 'Kasia',
        age: 30,
        studentShout: function() {
            console.log('we love coding!');
        }
    
    }
  }
 createMyObject().studentShout();


createMyObject.foo = 'foo';
createMyObject.bar = 'bar';
createMyObject.bizz = 'bizz';
createMyObject.bang = 'bang';
console.log(createMyObject);

function personMaker(){
    let person = {
        firstName: 'Jane',
        lastName: 'Hook',
        fullName: function(){
             return `${this.firstName} ${this.lastName}`;
        },
    };
    return person;
}
console.log(personMaker().fullName());


const myCats = {
  name: 'nibbs',
  name2: 'belle',
  age: 5,
};

function deleteKey(obj) {
  delete obj.age;
  return obj;
}

console.log(deleteKey(myCats));

function makeStudentsReport(data) {
  let studentArr = [];

  for (let i = 0; i < data.length; i++) {
    let element = data[i];
    studentArr.push(`${element.name}: ${element.grade}`);
  }
  return studentArr;
}


const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];

console.log(makeStudentsReport(testData));

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (this.water/(this.flour * 100))
  }
}

console.log(loaf.hydration())

const obj1 = {
  foo: "hello",
  bar: 3,
  fum: "hi",
  quux: true,
  spam: 7,
}


function keyCaller(obj) {
  for (const key in obj) {
    console.log(key, obj[key]);
}
}

keyCaller(obj1);

//ARRAYS IN OBJECTS

const hobbitMeals = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'],
}


console.log(hobbitMeals.meals[3]);

//ARRAY OF OBJECTS

const people = [
  {name: 'bob', jobTitle: "builder", boss: 'jan'},
  {name: 'jane', jobTitle: "writer", boss: 'jan'},
  {name: 'holly', jobTitle: "designer", boss: 'jan'},
  {name: 'jan', jobTitle: "CE0"},
];


for (let i = 0; i < people.length; i++) {
  let person = people[i];
  let personJobTitle = person.jobTitle;
  let personName = person.name;
  console.log(personJobTitle, personName);
}
for (let i = 0; i < people.length; i++) {
  if (people[i].boss) {
    
    console.log(`"${people[i].jobTitle} ${people[i].name} reports to ${people[i].boss}."`)
  } else {
    console.log(`"${people[i].jobTitle} ${people[i].name} doesn't report to anybody."`)

  }
}


const cipherObj = {
    a: 2,
    b: 3,
    c: 4,
    d: 5,
}

function decipher(obj, str) {
     let deciphered = '';
     let strArr = str.split(' ')
     let keysArr =Object.keys(obj);
     strArr.forEach(function(word){ 
        if(word[0] === keysArr[0]){
         deciphered += (word[obj.a-1])
        }
        else if (word[0] === keysArr[1]){
            deciphered += (word[obj.b-1])
        }
        else if (word[0] === keysArr[2]){
            deciphered += (word[obj.c-1])
        }
        else if (word[0] === keysArr[3]){
            deciphered += (word[obj.d-1])
        }
        else {
            deciphered += ' ';
        }
     });
     return deciphered;
    };

    console.log(decipher(cipherObj, 'craft block argon meter bells brown croon droop'));


// function decipher(obj, str) {
//     const deciphered = [];
//  let strArr = str.split(' ')
//  for (let i =0; i<strArr.length; i++){
//      switch(strArr[0]) {
//       case 'a' : return deciphered.push(strArr[1]);
//       case 'b' : return deciphered.push(strArr[2]);
//       case 'c' : return deciphered.push(strArr[3]);
//       case 'd' : return  deciphered.push(strArr[4]);
//       default: return deciphered.push(' ');
//      };
//   } 
//   return deciphered;

// }
console.log(decipher(cipherObj, 'craft block argon meter bells brown croon droop'));