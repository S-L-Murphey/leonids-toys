const toys = [ /*for objects in arrays use brackets, not curly braces, because this is an array (a list)*/
    {
        id: 1,
        name: "Clue",
        maker: "Hasbro",
        price: 19.95,
        inStock: true,
        genre: "boardgame"
    }, 
    {
        id: 2,
        name: "Sorry!",
        maker: "Mattel",
        price: 9.95,
        inStock: false,
        genre: "boardgame"
    }
];

const bear = {
    id: 3,
    name: "Paddington Bear",
    maker: "Leonid's Bespoke",
    price: 499,
    inStock: true,
    genre: "stuffedanimal"
};

const hulaHoop = {
    id: 4,
    name: "Hula Hoop",
    maker: "Art Vandelay",
    price: 200,
    inStock: false,
    genre: "outdoors"
};

/*CHAPTER 6 ITEMS*/
toys.push(bear);
toys.push(hulaHoop);
/*CHAPTER 6 ITEMS*/

/*CHAPTER 5 ITEMS
for (const toy of toys) { //for...of loop iterates the array. objects in this seront stored in the variable 'toy'//
    console.log(toy.price)
};

for (const toy of toys) {
    console.log(`Price is $${toy.price}`) // REQUIRES BACKTICKs //
};

for (const toy of toys) {
    console.log(toy.maker)
};*/


/*CHAPTER 7 ITEMS
const hoopCost = `The ${hulaHoop.maker} hoop costs ${hulaHoop.price}.`;
console.log(hoopCost);

for (const toy of toys) {
console.log(`The ${toy.maker} ${toy.name} costs ${toy.price} dollars.`)
};
CHAPTER 7 ITEMS*/

/*CHAPTER 8 ITEMS
for (const toy of toys) {
    // add a 5% increase to the price of each toy
    toy.price = toy.price + (toy.price * .05);
    console.log(`The ${toy.name} game now costs $${toy.price}. Sorry!`);
};
CHAPTER 8 ITEMS*/

/*CHAPTER 9 ITEMS
const toyToFind = 2;

for (const toy of toys){
    //only one toy will cause the condition to evaluate to true
    if (toy.id === toyToFind) {
        toy.price = toy.price + 5;
        console.log(`The ${toy.maker} ${toy.name} toy costs ${toy.price} dollars. Currently in stock?: ${toy.inStock}.`);
    }
}
*/

const raceCar = {
    name: "Race Car",
    maker: "Hot Wheels",
    price: 3.99,
    inStock: false,
    genre: "outdoors"
};

const addToyToInventory = (toyObject) => {
    //get index of last item in an array
    const lastIndex = toys.length -1; //length of list - 1 so 3
    //get get the last object in the array
    const currentLastToy = toys[lastIndex]; //toys[3] //the square brackets: whatever you put in will target that index within the array
    //get id property value of last toy
    const maxId = currentLastToy.id; // 4
    //Increase the current maxID by 1
    const idForNewToy = maxId + 1; // 4
    //Add the id property to the toy object
    toyObject.id = idForNewToy;
    //Add the toy object to the array
    toys.push(toyObject);
};

addToyToInventory(raceCar);

for (const toy of toys) {
    console.log(`The ${toy.maker} ${toy.name} toy costs ${toy.price} dollars. Currently in stock?: ${toy.inStock}`)
};

for (const toy of toys) {
console.log(toy.id);
};

console.log(toys.length);
console.log(toys);


const removeProduct = (idNumber) => {
    const convertID = (idNumber - 1);

    return convertID
};

const myIdNum = removeProduct(3)

const toyRemoval = toys.splice(myIdNum, 1);

console.log(toys);