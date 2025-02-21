// function manipulateStudent(student) {
//     let totalGrades = 0
//     for (let i = 0; i < student.grades.length; i++) {
//         totalGrades += student.grades[i]
//     }
//     let averageGrade = totalGrades / student.grades.length;

//     student.averageGrade = averageGrade

//     let studentCopy = {}
//     for (let j in student) {
//         if (j !== 'grades') {
//             studentCopy[j] = student[j]
//         }
//     }

  
//     return [student, studentCopy]
// }

// let student = {
//     name: "John",
//     age: 20,
//     grades: [85, 90, 78, 92]
// }

// let result = manipulateStudent(student)
// console.log(result)






function manipulateStudent(student) {
    let totalGrades = 0;
    for (let i = 0; i < student.grades.length; i++) {
        totalGrades += student.grades[i];
    }
    let averageGrade = totalGrades / student.grades.length;

    student.averageGrade = averageGrade;

    let studentCopy = JSON.parse(JSON.stringify(student));

    delete studentCopy.grades;


    return [student, studentCopy]
}
let student = {
    name: "John",
    age: 20,
    grades: [85, 90, 78, 92]
}

let result = manipulateStudent(student)
console.log(result)










//question 2
function getPizzaCount(guest){
    return Math.ceil((guest*3)/8)

}
console.log(getPizzaCount(10))