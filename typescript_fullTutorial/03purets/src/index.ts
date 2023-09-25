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

    protected _courseCount: number = 5; /// private => only accessible inside the class. protected => accessible inside the class and its sub classes
    
    readonly city: string = "Lonfoners";
    constructor(
        public email: string,
        public name: string
        ){
    }


    private deleteToken(){
        console.log('Deleted token');
    }

    get getAppleEmail(): string{
        return this.email.split('@')[0] + '@apple.com';
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set courseCount(courseNum: number){
        if(courseNum <= 1){
            throw new Error('Invalid course number');
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount(){
        this._courseCount = 4;
    }
}

const ian = new User('i@u.com', 'Ian');
// ian.city = "London";

// ian.courseCount = 4;
// ian.courseCount;