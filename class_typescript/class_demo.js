var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("UserName: ".concat(this.userName, ", Age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name: Arman Mir , age : 25
// user2 - name: Saidul Mir , age : 35
var user1 = new User("Al Saidul", 23);
user1.display();
var user2 = new User("Arman Mir", 23);
user2.display();
var user3 = new User("Al Saidul Arman Mir", 23);
user3.display();
