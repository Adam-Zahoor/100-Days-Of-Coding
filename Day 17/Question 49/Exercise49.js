// creating a function that will take in hobbies and log a statement on the console
function hobbies() {
    var hobby = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobby[_i] = arguments[_i];
    }
    hobby.forEach(function (hobby) {
        console.log("I really enjoy doing ".concat(hobby));
    });
}
;
// calling the function with some hobbies as a rest parameters
hobbies("gardening", "reading books", "playing tennis", "fishing");
