let myProfile = function () {
    let name: string = "Adam";
    let age: number = 21;

    return function(){
        console.log(`Name: ${name}, Age: ${age}`);
    } 
};


console.log(myProfile);