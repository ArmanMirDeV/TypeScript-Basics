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
for (var key in users) {
    console.log(users[key]["userName"]);
}
