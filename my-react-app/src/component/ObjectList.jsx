import { useState } from "react";

const ObjectList = () => {
    const [person, setPerson] = useState(
        {
            name: "Jacob Samson",
            age: 23,
            occupation: "Web Developer"
        }
    )
    
    const [value, setValue] = useState(0)
    
    const displayNewInfo = () => {
        setPerson(
            {
                name: "Jacob John",
                age: 17,
                occupation: "Fashion Designer"
            }
        )
    }

    const handleCounter = () => {
        setTimeout(() => {
            setValue((currentState) => currentState + 1 )
        }, 3000)
    }

    return ( 
        <div>
            <h2>{person.name}</h2>
            <h2>{person.age}</h2>
            <h2>Occupation: {person.occupation}</h2>
            <button style={{
                backgroundColor: "black",
                color: "white"
            }} onClick={displayNewInfo}>New User</button>
            <h2>{value}</h2>
            <button style={{
                backgroundColor: "black",
                color: "white"
            }} onClick={handleCounter}>Counter</button>
        </div>
     );
}
 
export default ObjectList;