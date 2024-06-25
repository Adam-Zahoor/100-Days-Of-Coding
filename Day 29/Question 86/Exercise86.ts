// creating a function that will return true if "JavaScript" is present in the parameter string that we provide
function checkingTheJavaScriptPresence(sentence: string) {
    if (sentence.includes("JavaScript")) {
        console.log(true);
    } else {
        console.log(false);
    };
};

// calling the function to obtain both true and false
checkingTheJavaScriptPresence("JavaScript is used to create logic when we are making a website");
checkingTheJavaScriptPresence("TypeScript");