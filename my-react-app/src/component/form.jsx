import { useState, useRef } from "react";

const FormInput = () => {
    const [users, setUsers] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [value, setValue] = useState(0)
    const refContainer = useRef(null)
    
    const handleChange = (e) => {
        setUsers({...users, [e.target.name] : e.target.value})
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTARGET)
        console.log(formdata)
        const user = Object.fromEntries(formdata)
        console.log([...formdata.entries()])
        const name = refContainer.current.value
        console.log(name)
    }

    return ( 
        <div>
            <form className="form-container" onSubmit={handleSubmit}>
                <h2>Login Page</h2>
                <input type="text" 
                placeholder="Name"
                className="style-input" 
                value={users.name}
                onChange={handleChange}
                name="name"
                ref={refContainer}
                /><br/>
                <input type="email" 
                placeholder="Email"
                className="style-input" 
                value={users.email}
                onChange={handleChange}
                name="email"
                ref={refContainer}
                 /><br/>
                <input type="password" 
                placeholder="Password"
                className="style-input" 
                value={users.password} 
                onChange={handleChange}
                name="password"
                ref={refContainer}
                /><br/>
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
     );
}
 
export default FormInput;