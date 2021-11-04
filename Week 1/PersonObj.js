const person = {
    name: "Quin",
    age: 25,
    job: "Programmer",
    faves: [
        "pizza",
        "chow mein",
        "fried rice",
    ],
    sayHi: function() {
        return `My name is ${this.name}`;
    },
};

console.log(person.sayHi());
console.log(`My third favourite food is ${person.faves[2]}`);

person.faveSongs = ["Houses of the Holy - Led Zep", "Take it Easy - The Eagles", "Goodbye Stranger - Supertramp"];

console.log(`My second favourite song is ${person.faveSongs[1]}`);
