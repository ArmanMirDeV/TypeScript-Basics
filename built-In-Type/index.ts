//  Built In data types:  number, string, boolean, void, null, undefined

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActivated: boolean;

userId = 101;
firstName = "Al Saidul Arman";
lastName = " Mir";
isActivated = true;

fullName = firstName.concat(lastName);




console.log(`Your id: ${userId}, username: ${fullName}, account activated: ${isActivated}`);


console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());



function display(): void {
    console.log("Hi i am Al Saidul Arman Mir ");
    
}
display();
