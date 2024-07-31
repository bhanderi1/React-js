let idType = "studentID";

let student = {
    [idType]:"A123456",  // Dynamic key based in idType
    SName : "srushti",
    SAge:20,
    isStudent : true,
    greet:function(){
        console.log(`my ${idType} is ${student[idType]} and my name is ${student.SName}`);
    }
}