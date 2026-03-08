

type User = { userName: string; userId: number };

let users: User[];

users = [];



let user1: User ;
user1 = { userName: "Arman", userId: 165 };
users.push(user1);

// console.log(users);

let user2: User;
user2 = { userName: "Mir", userId: 155 };
users.push(user2);

// console.log(users);

let user3: User;
user3 = { userName: "Saidul", userId: 155 };
users.push(user3);

// console.log(users);



type RequestType = "GET" | "POST"
let getRequest: RequestType;
getRequest = "POST";

function requestHandler(requestType: RequestType) {
    console.log(requestType);
    
}

requestHandler("POST")