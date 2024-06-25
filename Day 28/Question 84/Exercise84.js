"use strict";
// creating a function that will use the replace method and replace every "JavaScript" with "TypeScript"
function replacingTheText(sentence) {
    let replacedText = sentence.replace(/Java/g, "Type");
    console.log(replacedText);
}
;
// calling the function wtih some text
replacingTheText("I love JavaScript and JavaScript is a good language for learning Web Development");
