//  enum  -- store constants ; Duplicate value is not allowed here
// enum types:   numeric, string , heterogenous
// Numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 2] = "readData";
    RequestType[RequestType["saveData"] = 6] = "saveData";
    RequestType[RequestType["deleteData"] = 7] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.deleteData);
// console.log(RequestType["readData"]);
//  string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "Read_Data";
    RequestType2["saveData"] = "Save_Data";
    RequestType2["deleteData"] = "Delete_Data";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2.readData);
// console.log(RequestType2.saveData);
// console.log(RequestType2["readData"]);
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "Read_Data";
    RequestType3["saveData"] = "Save_Data";
    RequestType3["deleteData"] = "Delete_Data";
    RequestType3[RequestType3["userId"] = 205] = "userId";
    RequestType3[RequestType3["userCell"] = 56646400] = "userCell";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
