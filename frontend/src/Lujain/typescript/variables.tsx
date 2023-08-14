let fname: string = 'Lujain';
let age_string: string = '22';

let age: number = 22;

let graduated: boolean = true;

let subjects: String[] = ['math', 'science'];
let numbers: number[] = [5, 140, 10];
let all: (number|string|boolean)[] = [1, '1', false];
let any: any[] = ['hello', false, 9, 'hi',8, true];


let folder: object = {
    name: 'math',
    hours: 2,
};

let bool: boolean = true;
bool = false;

interface School {
    readonly ID: number,
    name: string,
    address?: string, // optional
    number: number,
};

let first: School = {
    ID: 13,
    name: 'IEC',
    number: 12345
};

let second: School = {
    ID: 15,
    name:'WISE',
    number :67890 ,
    address: 'amman',
}

first.address = 'amman';


function add(a: number, b: number = 5, c?: number): number {
    if (c) {
        return a + b + c;
    }
    return a + b;
}


const result: number = add(5);



function addrest(a: number, b: number, ...rest: number[]): number{
    let sum = a + b;
    for (let i = 0; i < rest.length; i++){
        sum += rest[i];
    }
    return sum;
}

const result4: number = addrest(5, 5, 5, 5, 5, 5, 5);

function swap<T>(a: T, b: T): [T, T] {
    return [b, a];
}

let x = 5;
let y = 10;

[x, y] = swap(x, y);