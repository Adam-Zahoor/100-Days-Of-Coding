// creating a function that will take in hobbies and log a statement on the console
function hobbies(...hobby: string[]) {
    hobby.forEach(hobby =>{
        console.log(`I really enjoy doing ${hobby}`)
    });
};

// calling the function with some hobbies as a rest parameters
hobbies("gardening","reading books", "playing tennis", "fishing");