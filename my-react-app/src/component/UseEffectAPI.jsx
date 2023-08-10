import { useEffect, useState } from "react";

const FetchApi = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const url = "https://api.github.com/users";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data= await fetch(url)
                const users = await data.json()
                setUsers(users)
            }
            catch (error) {
                setIsError(true)
                console.log(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [])

    if(isLoading) {
        return(<h2>Loading......</h2>)
    }
    if(isError){
        return (<h2>There was an error loading the data.....</h2>)
    }

    return ( 
        <div>
            <h2 className="heading">Github Users</h2>
            <ul>
                {users.map((user) => {
                    const {id, login, avatar_url, html_url, followers_url, following_url} = user
                    return (
                        <div className="users" key={id}>
                            <img src={avatar_url} alt={login} />
                            <a href={html_url}>Profile</a>
                            <a href={followers_url}>Followers</a>
                            <a href={following_url}>Following</a>
                        </div>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default FetchApi;