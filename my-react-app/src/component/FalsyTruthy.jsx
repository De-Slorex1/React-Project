import { useState } from "react";

const ShortCircuit = () => {
    //Falsy
    const [text, setText] = useState("")
    //Truthy
    const [name, setName] = useState("Susan")
    const [user, setUser] = useState({name: "Oyenusi Oyenuga"})

    return ( 
        <div>
            <h2>Falsy: {text || "hello world"} </h2>
            <h2>Falsy: {text && "hello world"} </h2>
            <h2>Truthy: {name || "hello world"} </h2>
            <h2>Truthy: {name && "hello world"}</h2>
            {user ? <h2>{user.name}</h2> : <h2>No user found</h2>}
        </div>
     );
}
 
export default ShortCircuit;