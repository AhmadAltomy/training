// Person interface
interface Person {
    name: string,
    age: number,
    isEmployed: boolean
}


// PersonCardProps type
type PersonCardProps = {
    // Person props of type Person
    person: Person
    // hideCard props of type boolean (optional)
    hideCard?: boolean

}

// PersonCard component Taking in PersonCardProps as props
function PersonCard(props: PersonCardProps) {
    // if hideCard is true, return null
    if (props.hideCard) return null
    // else return the PersonCard component
    return (
        <div>
            <h1>Person Card</h1>
            <h3>Person name:{
                props.person.name
            }</h3>
            <h3>Person age:{
                props.person.age
            }</h3>
            <h3>Person is employed:{
                props.person.isEmployed ? "Yes" : "No"
            }</h3>
        </div>
    )
}


export default PersonCard
