const student1 = {
    name : "Jack",
    grade: "5",
    introduction:function(){
        console.log(this.name  + "studies in grade" + this.grade + ".");
    },
}

const student2 = {
    name : "Jimmy",
    grade :  "6",
}

let result = student1.introduction.bind(student1)
result();
