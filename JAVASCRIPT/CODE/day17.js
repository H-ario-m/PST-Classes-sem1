let arr=[5,2,8,12,3]
let arr2 = arr.slice(1,3).concat([4,6]).join(", ")
console.log(arr2)
console.log(arr.sort((a,b)=>a-b))



//getter and setter methods 

    class Student {
        constructor(name, age, grade) {
            this.name = name;
            this.age = age;
            this.grade = grade;
        }

        get fullName() {
            return `${this.name} ${this.age}`;
        }

        set fullName(value) {
            let [name, age] = value.split(' ');
            this.name = name;
            this.age = age;
        }
    }