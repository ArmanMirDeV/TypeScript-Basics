class User {
    // properties , methods , constructor 
    userName: string;
     age: number;

    constructor(userName: string, age: number){
    this.userName = userName;
    this.age = age;

    }

    display(): void {
        console.log(`UserName: ${this.userName}, Age: ${this.age}`);
        
    }

}

// class object
// user1 - name: Arman Mir , age : 25
// user2 - name: Saidul Mir , age : 35


let user1 = new User("Al Saidul", 23)
user1.display()
let user2 = new User("Arman Mir", 23)
user2.display()
let user3 = new User("Al Saidul Arman Mir", 23)
user3.display()