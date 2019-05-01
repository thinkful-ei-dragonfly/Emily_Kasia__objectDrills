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