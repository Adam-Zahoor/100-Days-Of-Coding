function checkBothTrue(val1: boolean, val2: boolean) {
    if (val1 && val2 === true) {
        console.log(true);
    } else {
        console.log(false);
    };
};

checkBothTrue(true, false);
checkBothTrue(true, true);
checkBothTrue(false, true);

