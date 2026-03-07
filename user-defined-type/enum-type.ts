//  enum  -- store constants ; Duplicate value is not allowed here


// enum types:   numeric, string , heterogenous


// Numeric enum

enum RequestType {
    readData = 2,
    saveData = 6,
    deleteData,

}


// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["readData"]);



//  string enum

enum RequestType2 {
    readData = "Read_Data",
    saveData= "Save_Data",
    deleteData = "Delete_Data",
    
}


// console.log(RequestType2.readData);
// console.log(RequestType2.saveData);
// console.log(RequestType2["readData"]);


enum RequestType3 {
    readData = "Read_Data",
    saveData = "Save_Data",
    deleteData = "Delete_Data",
    userId = 205,
    userCell = 56646400
}

console.log(RequestType3);
