var users;
users = [];
var user1;
user1 = { userName: "Arman", userId: 165 };
users.push(user1);
// console.log(users);
var user2;
user2 = { userName: "Mir", userId: 155 };
users.push(user2);
// console.log(users);
var user3;
user3 = { userName: "Saidul", userId: 155 };
users.push(user3);
var getRequest;
getRequest = "POST";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
