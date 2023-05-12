// HERENCIA 1

class Car {
    constructor(make, year) {
        this.make = make;
        this.year = year;
      }


getDescription() {
    return `This is a(n) ${this.make} car from  ${this.year}.`;
  }
}

  const myCar = new Car("Audi", 2019);
  console.log(myCar.getDescription()); // "This is a(n) Audi car from 2019."

  // HERENCIA 2

  class Person {
    constructor(name, age, gender) {
        this.name = Name;
        this.age = Age;
        this.gender = Gender;
      }
      getName() {
        return this.name;
      }
     
      getAge() {
        return this.age;
      }
     
      getGender() {
        return this.gender;
      }
    }

    // Creamos la nueva clase student pero que hereda de la primera clase
    class Student extends Person {
        constructor(name, age, gender, studentId) {
          super(name, age, gender);
          this.studentId = studentId;
        }
       
        getStudentId() {
          return this.studentId;
        }
      }
      const student1 = new Student("Sandra", 28, "Femalemale", 12345);
      console.log(student1.getName()); 
      console.log(student1.getAge()); 
      console.log(student1.getGender()); 
      console.log(student1.getStudentId()); 