const student = {
    name: "Krishna Pushparajah",
    age: 24,
    enrolled: true,
    courses: ["Computer Science", "Physics", "Mathematics"],
    displayInfo: function() {
        return `Student Name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
};

console.log(`Name: ${student.name}, Age: ${student.age}`);

console.log(student.displayInfo());

const studentJSON = JSON.stringify(student);


console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);

console.log("Parsed Object:", parsedStudent);
console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(parsedStudent));