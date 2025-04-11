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

//--------------------------------------------------------------

const studentJSON = JSON.stringify(student);

console.log("JSON String:", studentJSON);

const parsedStudent = JSON.parse(studentJSON);

console.log("Parsed Object:", parsedStudent);
console.log("Are the objects equal?", JSON.stringify(student) === JSON.stringify(parsedStudent));

//--------------------------------------------------------------

const { name, courses } = student;
console.log(`Destructured Name: ${name}`);
console.log(`Destructured Courses: ${courses}`);

const scores = [88, 76, 95, 89];

const [score1, score2] = scores;
console.log(`First Score: ${score1}, Second Score: ${score2}`);

const averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(`Average Score: ${averageScore}`);

//--------------------------------------------------------------

const clonedStudent = { ...student };

clonedStudent.graduationYear = 2026;
console.log("Cloned Student with New Property:", clonedStudent);

const newCourses = ["Economics", "Biology"];
const allCourses = [...student.courses, ...newCourses];
console.log("Merged Courses Array:", allCourses);

//--------------------------------------------------------------

student.addCourse = function (newCourse) {
    this.courses.push(newCourse);
    console.log(`Course "${newCourse}" added. Updated Courses:`, this.courses);
};

student.getTotalCourses = function () {
    return this.courses.length;
};

student.addCourse("Data Science"); 
console.log(`Total Number of Courses: ${student.getTotalCourses()}`);

//--------------------------------------------------------------


