// creating a function that will take in a string as a parameter and then converting them into lowecase and uppercase
function convertingToUpperCaseLowercase(sentence: string) {
    console.log(`In UpperCase: ${sentence.toUpperCase()}`);
    console.log(`In LowerCase: ${sentence.toLowerCase()}`);
};

// calling the function two times with different strings
convertingToUpperCaseLowercase("I love TypeScript");
convertingToUpperCaseLowercase("My name is Adam");