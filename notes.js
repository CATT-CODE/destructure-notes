// Destructuring

//•  Definition - breaking objects and arrays into smaller fragments to extract data more 
    // efficiently. Ultimately it makes code more readable and cleaner.
//•  Where its used - Variable declaration; Variable Assignment; Function Arguments. It can also
    // handle nested structures using nested destructuring syntax.

//•  Object destructuring

const student = {
    firstName: 'Danny',
    eyes: 'brown',
    lives: 'US',
};

const {firstName, eyes, lives} = student; // allows us to make variables out of the keys provided.

console.log(firstName); //John

//• Object destructuring reassigning global variables.

let country = 'Canada';
let eyeColor = 'green';
let name = "Doe";

const person = {
    name: 'John',
    eyeColor: 'brown',
    country: 'US',
};

// The below code will reassign the global variables within the curly braces to the values inside the object with 
    // the matching key names.

({name, eyeColor} = person); //Make sure if you have curly braces on the left that the whole line is wrapped in parentheses.

console.log(name, eyeColor, country);

//• Default Values. Use = sign to give values that have not been declared something to display if no other 
    // info has been assigned already.

const guy = {
    id: "John Doe",
    place: 'Iran'
};

const {id, place, DOB = "12/12/90"} = guy;

//• alias: you can give a variable a nick-name with the following code.

const dude = {
    hair: "brown",
    nose: "big",
};

const {hair: h, nose: n} = dude;

console.log(`my hair is ${h} and my nose is ${n}.`)

//• class and obj destructuring.

class Animals {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    };
}

let dog = new Animals('poodle', 'Nelly');

const {type, nickname} = dog;

console.log(`Hello I am a ${type} named ${name}.`);

//• nested obj destructuring. Nest curly braces to access sub objects.

const man = {
    identity: 'John Doe',
    residence: 'Canada',
    scores: {
        math: 74,
        english: 63,
    }
};

const {identity, residence, scores: {math: m, english}} = man;

console.log(`I am ${identity} from ${residence} and my scores are ${m} and ${english}.`);

//• Array destructuring and default values (works the same as object except uses brackets)

const rgb = [255, 200, 0];

const [red = 200, green, blue, cyan = 3] = rgb;

console.log(red, green, blue, cyan);

//• reassigning global variables. 

let ruby = 100; //global variables
let forrest = 145;
let sky = 50;

const colors = [202, 252, 99]; //array of new values

[ruby, forrest] = colors; //put the variables you want to reassign in brackets and set to the array name.

console.log(ruby, forrest, sky); //sky was not included, its value is unchanged.

//• skipping items (only for arrays)

const daColors = [200, 255, 100];

const [, , skyBlue] = daColors; // add commas in the array to skip the values you don't want to assign to a variable. 

console.log(skyBlue);

//• Swapping variables (the variables dont have to be in an array to do this)

let color1 = 'pink';
let color2 = 'purple';

[color2, color1] = [color1, color2];

console.log(color2);

//• nested array destructuring

const colorz = ['#ff00ff', [255, 0, 200], 'rgb(255, 0, 200)'];

const [hex, [redd, greenn, bluee], str] = colorz;

console.log(hex, greenn, bluee, str);



//• Mixed nested destructuring.

const myPerson = {
    perp: "John",
    age: 24,
    location: {
        places: 'Canada',
        city: "Big City",
        gps: [91453, -24895]
    }
};

const {
    perp,
    age,
    location: {
        places,
        city,
        gps: [lat, long]
    }
} = myPerson;

console.log(perp, age, places, city, lat, long);

//• Destructuring function parameters

let objNew = {
    dude: "matt",
    height: "6 Foot"
};

function des({dude, height}) {
    console.log(dude, height);
    return;
}

des(objNew);

//• Destructuring function parameters part 2.

let arrBig = [
    {
        lad: 'jonny',
        count: 24,
    },
    {
        lad: "han",
        count: 59,
    },
    {
        lad: "joey",
        count: 34
    }
];

arrBig.map(({lad, count}) => console.log(`My name is ${lad}, and I am ${count}.`)); //?

//• Destructuring function parameters part 3.

let arr5 = [
    {
        laddy: 'jonny',
        counter: 24,
    },
    {
        laddy: "han",
        counter: 59,
    },
    {
        laddy: "joey",
        counter: 34
    }
];

arr5.map((thing) => {
    const {laddy, counter} = thing;
    console.log(`My name is ${laddy}, and I am ${counter}.`);
    return;
});


// Spread Operator allows you to quickly copy a flat array (no subarray) into a brand new array (non-mutative). 
//  Also allow you to join multiple arrays into 1.

let lilArr = [1, 2, 3, 4];

let tinyArr = [5, 6, 7, 8];

let newArr = [...lilArr, ...tinyArr];

console.log (newArr);

// using Spread operator in an object.

let anObj = {
    name: 'jon',
    eyes: 'green',
}

let anotherObj = {...anObj};

anotherObj.name = "bigDOG"

//• Rest operator allows you to give variable names to some items inside of an array, and put any remainders (the 'rest') 
//   that you didn't give names to inside a new array.

let coloors = ['red', 'green', 'blue', 'orange', 'black'];

let [r, g, ...leftovers] = coloors;

console.log(r, g, leftovers);

// using rest operator in a function:

let flower1 = "daisy";
let flower2 = "dafadil";
let flower3 = "rose";
let flower4 = "sun";

const flowerfunc = function(color, ...colores) {
    console.log('first: ', color);
    console.log('rest: ', ...colores);
}

flowerfunc(flower1, flower2, flower3, flower4);