import { useState } from "react";
import { data } from "./data";

const NewUser = () => {
    const [name, setName] = useState('')
    const [users, setUsers] = useState(data)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name) return;
        const fakeId = Date.now()
        const newUser = {id: fakeId, name}
        const updateNewUser = [...users, newUser]
        setUsers(updateNewUser)
        setName("")
    }

    const clearItem = (id) => {
        const del = users.filter((user) => user.id !== id )
        setUsers(del)
    }
    return ( 
        <div>
            <form className="form-containers" onSubmit={handleSubmit}>
                <h2>Add to List</h2>
                <label>Full Name</label>
                <input type="text" 
                className="style-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <button className="submit-btn" type="submit">Submit</button>
                {users.map((user) => {
                    return (
                        <div className="card-bg" key={user.id}>
                            <p>{user.name}</p>
                            <button onClick={() => {clearItem(user.id)}}>Remove</button>
                        </div>
                    )
                })}
            </form> 
        </div>
     );
}
 
export default NewUser;