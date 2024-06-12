
function objectKeyValue(key: string, value: string) {
   let myObject: {[key: string] : string}= {};
   myObject[key] = value;
   return myObject;
};

console.log(objectKeyValue("myName", "adam"));
console.log(objectKeyValue("myAge", "21"));
console.log(objectKeyValue("myNumber", "xyz"));