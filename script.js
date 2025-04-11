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

