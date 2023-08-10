import UserContent from "./UserContent";

const container = {
    display: "flex",
    justifyContent: "space-between"
}

const links = {
    display: "flex",
    alignItem: "center",
    justifyContent: "space-between",
    width: "100%"
}

const Navlinks = ({user, logout}) => {
    return ( 
        <div style={container}>
            <ul style={links}>
                <li style={{textDecoration: "none", listStyle: "none"}}><a href="#">Home</a></li>
                <li style={{textDecoration: "none", listStyle: "none"}}><a href="#">About</a></li>
                <li style={{textDecoration: "none", listStyle: "none"}}><a href="#">Contact Us</a></li>
            </ul>
            <UserContent user={user} logout={logout} />
        </div>
     ); 
}
 
export default Navlinks;