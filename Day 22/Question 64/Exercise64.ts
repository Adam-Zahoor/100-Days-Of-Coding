function addingStringsNumbers(Text: string , Info: number|string|boolean ) {
    let completeSentence = `${Text}: ${Info}`;
    console.log(completeSentence);
};

addingStringsNumbers("Name", "Adam");
addingStringsNumbers("Age", 21)
