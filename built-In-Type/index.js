//  Built In data types:  number, string, boolean, void, null, undefined
var userId;
var firstName;
var lastName;
var fullName;
var isActivated;
userId = 101;
firstName = "Al Saidul Arman";
lastName = " Mir";
isActivated = true;
fullName = firstName.concat(lastName);
console.log("Your id: ".concat(userId, ", username: ").concat(fullName, ", account activated: ").concat(isActivated));
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
