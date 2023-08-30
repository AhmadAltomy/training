/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// String

const fullName: string = 'Laith Yassin';
let firstName: string = `Laith`;
const lastName: string = "Yassin";


// Naumber 
 let avg: number = 50.2;
 const birthYear: number = 1998;
 let total: number = 82.55;


// Boolean 

let isStudent: boolean = false;
let isShow: boolean = true;


// Array 

let subjectS: string[] = ['math' , 'scince', 'bio'];
let marks: number[] = [85,86,95,84];
let details: (string | number | boolean)[] = ['math' , 88 , true] ;
let anyDetails: any[] = ['bio', 48 , false];


// Object

let subjectDetiled: object = {
    subjectName: 'math',
    mark: 85,
    isPass: true
};


// Define interfaces for objects and functions
interface Book {
    title: string;
    author: string;
    year: number;
    readonly ISBN: string;
    pageCount?: number;
  }
  
  const book: Book = {
    title: "Guide",
    author: "Smith",
    year: 2015,
    ISBN: "1234567890",
  };

  function multiply(x: number, y: number, z: number = 1): number {
    return x * y * z;
}

 

  


//   Define types for objects and functions

  type BookType = {
    title: string;
    author: string;
    year: number;
    readonly ISBN: string;
    pageCount?: number;
  };
  
  const Book1 : BookType = {
    title: "The TypeScript Guide",
    author: "Jane Smith",
    year: 2023,
    ISBN: "1234567890",
  };
  

  