let myProfile = function () {
    let name: string = "Adam";
    let age: number = 21;

    return{displayInfo: function() {
        console.log(`Name: ${name}, Age: ${age}`);
    }};
}();


myProfile.displayInfo();



