import { useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState("red");

    return (
        <h1>{ color } < /h1>
        < button type = "button"onClick = {() => setColor("blue")
}> Blue < /button>
)}


// ///////////

import { useEffect } from "react";

function Effect() {
    useEffect(() => {
        console.log('start');
        return () => {
            console.log('return');
        };
    }, []);
}
// ///////////

import { useMemo } from "react"

function memory() {
    useMemo(() => {
        console.log(Math.random());
    }, [])
}

// ///////////

import { useCallback } from "react"

const Add = useCallback((a: number, b: number) => {
    let result = a + b;
    setTimeout(() => console.log(`result ${result}`), 200);
});
Add(567894321, 500);

// ///////////

// ---> the customize hooks in lujain/react/hooks