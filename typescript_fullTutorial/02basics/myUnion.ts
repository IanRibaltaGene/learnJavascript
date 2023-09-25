let score: number | string = 33;

score = 44
score = '44'


type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let ian: User | Admin = {name: 'Ian', id: 1}

ian = {username: 'Ian', id: 1}

// function getDbId(id: number | string) {
//     // Some Api calls
//     console.log(`DB id is: ${id}`);
// }

getDbId(1);
getDbId('1');

function getDbId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase();
    }
}

// Array

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string | number)[] = ['1', '2', 3];

let seatAllotment: "aisle" | "window" | "middle";

seatAllotment = "aisle";
// seatAllotment = "crew";