type aUser = { userId: number, firstName: string, lastName: string, userCell: number, isActive: boolean, }

let aUsers: aUser[];
aUsers = [];

let aUser1: aUser;
aUser1 = { userId: 101, firstName: "Arman", lastName: "Mir", userCell: 45512154, isActive: true }
aUsers.push(aUser1)


let aUser2: aUser;
aUser2 = { userId: 102, firstName: "Al", lastName: "Saidul", userCell: 646546464, isActive: true }

aUsers.push(aUser2)






console.log(aUsers);
