import {useEffect, useState} from "react";


const useStorageState = (key:string,defaultValue:string) => {
    // Value use state
    const [value, setValue] = useState(() => {
        const localValue = window.localStorage.getItem(key);
        if (localValue) {
            return localValue
        }
        return defaultValue
    })


    useEffect(() => {
        window.localStorage.setItem(key, value)
    }, [value]);


    // return value and setValue
    return [value,setValue]
}



export default useStorageState
