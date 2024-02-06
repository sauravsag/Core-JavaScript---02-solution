
function displayInfo(name, role){
    console.log(`name: ${name}, Role: ${role}`);
}

displayInfo.call(null, "saurav", "Developer");

displayInfo.apply(null, ["sagar", "SDE"]);

function greet(){
console.log(`Hello, ${this.name}!`);
}

const user = {name: "saurav" } ;
const boundGreet=greet.bind(user);
boundGreet();
