let topping = "Pickles"

switch(topping){
    case "Pepperoni":
    case "Mushrooms":
        console.log(`${topping}? That's a good topping for a pizza!`);
        break;
    case "Peppers":
    case "Chicken":
        console.log(`I don't mind having ${topping} on my pizza`);
        break;
    case "Custard":
    case "Pickles":
        console.log(`${topping} shouldn't be on a pizza`);
        break;
}
