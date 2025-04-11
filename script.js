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


const { name, courses } = student;
console.log(`Destructured Name: ${name}`);
console.log(`Destructured Courses: ${courses}`);

const scores = [85, 92, 78, 90];

const [score1, score2] = scores;
console.log(`First Score: ${score1}, Second Score: ${score2}`);

