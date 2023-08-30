import './App.css'
import PersonCard from "./PersonCard.tsx";


type Person = {
    name: string
    age: number
    isEmployed: boolean
}

const persons: Person[] = [
    {
        name: 'John',
        age: 20,
        isEmployed: true
    },
    {
        name: "Jane",
        age: 30,
        isEmployed: false
    },
    {
        name: "Jack",
        age: 40,
        isEmployed: true
    }
]

function App() {


    return (
        <div className="App">
            {persons.map((person, index) => (
                <PersonCard key={index} person={person} />
            ))}
        </div>
    )
}

export default App