"use strict";
// class User {
//     public email: string;
//     private name: string;
//     readonly city: string = "Lonfoners";
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 5; /// private => only accessible inside the class. protected => accessible inside the class and its sub classes
        this.city = "Lonfoners";
    }
    deleteToken() {
        console.log('Deleted token');
    }
    get getAppleEmail() {
        return this.email.split('@')[0] + '@apple.com';
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error('Invalid course number');
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const ian = new User('i@u.com', 'Ian');
// ian.city = "London";
// ian.courseCount = 4;
// ian.courseCount;
