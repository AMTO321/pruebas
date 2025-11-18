// Student.js
// Ubicación: CODIGOEXAMEN/Student.js

export class Student {
    constructor(id, name, major, gpa) {
        this.id = id;
        this.name = name;
        this.major = major;
        this.gpa = gpa;
    }
    toString() {
        return `Student {ID: ${this.id}, Name: ${this.name}, Major: ${this.major}, GPA: ${this.gpa}}`;
    }
}