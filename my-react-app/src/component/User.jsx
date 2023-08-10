import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)

    const handleLogin = () => {
        setUser({name: "welcome to the dashboard"})
    }
    const handleLogout = () => {
        setUser({name: "please login with button below"})
    }
    return ( 
        <div>
            {user ? (
                <div>
                    <h2>{user.name}</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) 
            : 
            (
                <div>
                    <h2>Please login with the button below</h2>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )
    }
        </div>
     );
}
 
export default Login;