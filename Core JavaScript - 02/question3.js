const contactMap = new Map();

contactMap.set("saurav",{
    age:30,
    email: "saurav@gmail.com",
    location : "Banglore",
})
contactMap.set("Jsagar",{
    age:30,
    email: "sagar@example.com",
    location : "Banglore",
})


function getContact(name) {
    return contactMap.get(name);
}
console.log(getContact("saurav"));