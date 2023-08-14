# Typescript

### Basics Types

- String

```typescript
let name: string = 'John'; // "John" or `John`
```

- Number

```typescript
let age: number = 25; // 1, 0.5, 0xf00d, 0b1010, 0o744
```

- Boolean

```typescript
let isMarried: boolean = false; // true or false
```

- Array

```typescript
let fruits: string[] = ['Apple', 'Banana', 'Orange']; // Array of strings
let numbers: number[] = [1, 2, 3]; // Array of numbers
let mixed: (string | number | boolean)[] = ['Apple', 1, true]; // Array of mixed types
let mixed: any[] = ['Apple', true, 1, "Orange"]; // Array of any type
```

- Object

```typescript
let person: object = {
    name: 'John',
    age: 25,
    isMarried: false
};
```

### Variable Declarations

- var

```typescript
var name: string = 'John';
```

- let
  When the variable is going to change its value, use `let`

```typescript
let name: string = 'John';
name = 'Jane'; // OK
```

- const
  When the variable is not going to change its value, use `const`

```typescript
const name: string = 'John';
name = 'Jane'; // ERROR
```

### Interfaces

interfaces are used to define the type of an object or a function

- Interfaces

```typescript
interface Person {
    name: string;
    age: number;
    isMarried: boolean;
}
```

Example:

```typescript
// Person interface with name, age, isMarried properties
// We can use this interface to define the type of a variable
interface Person {
    name: string
    age: number
    isMarried: boolean
    country: string
}

// a variable of type Person 
const john: Person = {
    name: 'John',
    age: 25,
    isMarried: false,
    country: 'USA'
}

// a variable of type Person
const mary: Person = {
    name: 'Mary',
    age: 27,
    isMarried: true,
    country: 'UK'
}
```

- Optional Properties
  optional properties are properties that can be undefined

```typescript
interface Person {
    name: string
    age: number
    isMarried: boolean
    country: string
    nativeLanguage?: string // Optional property (can be undefined) 
}


const john: Person = {
    name: 'John',
    age: 25,
    isMarried: false,
    country: 'USA',
    nativeLanguage: 'English' // With nativeLanguage property (optional)
}

const mary: Person = {
    name: 'Mary',
    age: 27,
    isMarried: true,
    country: 'UK'
    // Without nativeLanguage property (optional)
}
```

- Readonly properties
  readonly properties are properties that can't be changed

```typescript
interface Person {
    readonly name: string
    age: number
    isMarried: boolean
    country: string
    nativeLanguage?: string
}


const john: Person = {
    name: 'John',
    age: 25,
    isMarried: false,
    country: 'USA',
    nativeLanguage: 'English'
}

const mary: Person = {
    name: 'Mary',
    age: 27,
    isMarried: true,
    country: 'UK'
    // Without nativeLanguage property (optional)
}

let anotherPerson: Person = {
    name: 'Another Person',
    age: 30,
    isMarried: false,
    country: 'USA'
}

anotherPerson.age = 31
anotherPerson.name = 'Another Person 2' // Error: Cannot assign to 'name' because it is a read-only property.
```

### Functions

Define the type of function

```typescript
// add function takes two numbers and returns a number
function add(x: number, y: number): number {
    return x + y;
}

const result: number = add(1, 2); // Return type is a number
```

- Optional
    - Optional parameters are parameters that can be undefined
    - Optional parameters must be the last parameters
    - When we just use `?` it means that the parameter can be undefined
    - When we just use if (c) it means that c is not undefined, null, 0, false, NaN

```typescript
// add function takes two numbers and returns a number
function add(x: number, y: number, z?: number): number {
    if (z) {
        return x + y + z;
    }
    return x + y;
}

const result: number = add(1, 2); // Return type is a number
const result2: number = add(1, 2, 3); // Return type is a number
// ------------------------------------------------
function multiply(a: number, b: number, c?: number): number {
    // typeof c === 'undefined' || typeof c === 'number'
    // when we use just if (c) it means that c is not undefined, null, 0, false, NaN
    if (c) {
        // typeof c === 'number'
        return a * b * c
    }

    return a * b
}
```

- Default
    - Default parameters are parameters that can be undefined
    - Default parameters must be the last parameters
    - When we just use `?` it means that the parameter can be undefined
    - When we just use if (c) it means that c is not undefined, null, 0, false, NaN
```typescript
// add function takes two numbers and returns a number
  function add(x: number, y: number, z: number = 0): number {
        return x + y + z;
    }
  
    const result: number = add(1, 2); // Return type is a number
    const result2: number = add(1, 2, 3); // Return type is a number
```
  
Example:
```typescript
function divisionByNumberOrTwo(number: number, division: number = 2) {
    return number / division
}

const withDefaultDivision = divisionByNumberOrTwo(4) // 4 / 2 = 2
const withoutDefaultDivision = divisionByNumberOrTwo(4, 4) // 4 / 4 = 1
```

- Rest
    - Rest parameters are parameters that can be undefined
    - Rest parameters must be the last parameters
    - Rest parameters are an array of the same type
    - Rest parameters can be empty
    - Rest parameters can be one or more
```typescript
// add function takes two numbers and returns a number
function add(x: number, y: number, ...rest: number[]): number {
    let result = x + y;
    for (let i = 0; i < rest.length; i++) {
        result += rest[i];
    }
    return result;
}

const result: number = add(1, 2); // Return type is a number
const result2: number = add(1, 2, 3); // Return type is a number
const result3: number = add(1, 2, 3, 4); // Return type is a number
const result4: number = add(1, 2, 3, 4, 5); // Return type is a number
```

- Generics
    - Generics are used to create reusable components
    - Generics are used to create components that work with many types instead of a single type
    - Generics are used to create components that work with any data type
    - Generics are used to create components that work with any data type and not lose the type of the data
```typescript
// Generic function
function identity<T>(arg: T): T {
    return arg;
}

// Generic function with type
function identity<T>(arg: T): T {
    return arg;
}

const result: number = identity<number>(1); // Return type is a number
const result2: string = identity<string>('Hello'); // Return type is a string
const result3: boolean = identity<boolean>(true); // Return type is a boolean
const result4: number[] = identity<number[]>([1, 2, 3]); // Return type is an array of numbers
```


