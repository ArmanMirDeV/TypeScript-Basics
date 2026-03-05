let userId: number | string | boolean;

userId = 105;
userId = "105";
userId = true;


function displayUserInfo(userId:string | number) {
    console.log(userId);
    
}

displayUserInfo(105)
displayUserInfo("105")