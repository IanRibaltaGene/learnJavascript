// const User = {
//     name: 'Ian',
//     email: 'ian@es.de',
//     isAlive: true
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {name: 'Ian', isPaid: false, email: 'h@h.com'}

// createUser(newUser)



// function createCourse(): {name: string, price: number}{
//     return {name: 'Angular', price: 100}
// }


// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: '', email: '', isActive: false}
// }

// createUser({name: 'Ian', email: '', isActive: true})


type User = {
    readonly _id: string; //readonly
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number; //optional
}


let myUser: User = {
    _id: '123',
    name: 'i',
    email: 'i@i.com',
    isActive: false,
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: string;
} // cardNumber & cardDate good practice. & {cvv: string;} not good practice


myUser.email = 'i@gmail.com'
// myUser._id = '1234'





export {}