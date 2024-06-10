var myProfile = function () {
    var name = "Adam";
    var age = 21;
    return function () {
        console.log("Name: ".concat(name, ", Age: ").concat(age));
    };
};
console.log(myProfile);
