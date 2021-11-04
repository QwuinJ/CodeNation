let offer = "none";
let time = 1300;

const cafe = {
    name: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "latte",
        "americano",
        "cappucino",
        "tea",
        "mocha",
    ],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with sandwich",
    noOffer: "Sorry no offer",
    openCafe: () => {
        if (this.hasSpecialOffers){
            // needs the this. to tell the code where to look for the variable
            return "Time for a special offer!";
        } else {
            return "No special offers today";
        }
        return "The cafe is open";
    },
    closeCafe: () => {
        return "We are closed, come back tomorrow!"
    },
    cafeCap: () => {
        return `Our current capacity is ${cafe.seatingCapacity}`;
    }
};

cafe.name = "Hen Stop";

console.log(cafe.openCafe());
console.log(`Welcome to ${cafe.name}`);
console.log(cafe.cafeCap());

if (time < 1100){
    offer = cafe.breakfastOffer;
    console.log(cafe.breakfastOffer);
} else if (time < 1500) {
    offer = cafe.lunchOffer;
    console.log(cafe.lunchOffer);
} else {
    console.log(cafe.noOffer);
}
