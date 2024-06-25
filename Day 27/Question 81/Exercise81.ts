// creating an object which stores some information about a person
const myObject: any = {
    name: "Adam",
    age: 21,
    qualification: "O-levels",
    height: 6,
    eyeColor: "brown",
    hairColor: "brown"
};

// creating a function to print out all the keys and values stored inside the object
function propertiesOfObject(obj: object) {
    for(let keys in myObject) {
        console.log(`${keys}: ${myObject[keys]}`);
    };
};

// calling the function
propertiesOfObject(myObject);

   
