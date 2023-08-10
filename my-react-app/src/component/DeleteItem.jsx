import { data } from "./data";
import { useState } from "react";

const DeleteItem = () => {
    const [people, setPeople] = useState(data)

    const clearItem = (id) => {
        const removeUser = people.filter((per) => per.id !== id)
        setPeople(removeUser)
    }
    
    const clearAllItems = () => {
        setPeople([])
    }

    return ( 
        <div className="data-container">
            {people.map((person) => {
                const {id, name} = person
                return (
                    <div key={id}>
                        <h2>{name}</h2>
                        <button type="button" onClick={() => {clearItem(id)}}>Delete</button>
                    </div>
                )
            })}
            <button style={{
                margin: "20px", 
                backgroundColor: "black", 
                color: "white"
            }} onClick={clearAllItems}>Delete All</button>
        </div>
     );
}
 
export default DeleteItem;