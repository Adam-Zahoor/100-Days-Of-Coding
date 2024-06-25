"use strict";
// creating a function that will print the greeting to any known user or an anonymous user
function greeting(userName = "Anonymous Person") {
    console.log(`Hello ${userName}, how are you doing?`);
}
;
// calling the function two times, with a username and without a username
greeting("Adam");
greeting();
