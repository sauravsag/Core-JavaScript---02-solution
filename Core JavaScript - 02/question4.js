let person1 = {
    name : 'saurav', 
    age:25,
};
const person2 = {name: "sagar", age: 36} 
function introduce(){
console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
}
introduce.call(person2);