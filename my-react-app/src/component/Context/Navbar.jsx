import { useState } from "react";
import Navlinks from "./Navlink";

const container = {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    width: "100%"
}

const Navbar = () => {
    const [user, setUser] = useState({name: 'Bob'})
    const logout = () => {
        setUser(null)
    }
    return ( 
        <div style={container}>
            <h2>Navbar</h2>
            <Navlinks user={user} logout={logout} />
        </div>
     );
}
 
export default Navbar;