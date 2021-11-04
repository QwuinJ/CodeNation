// days until my birthday
const now = new Date();
const bday = new Date("Nov 23, 2021, 15:00:00");
const wait = bday.getDate() - now.getDate();


console.log(`Today is ${now}. My birthday is ${bday}. That's ${wait} days to go!`);
