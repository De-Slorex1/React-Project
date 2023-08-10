import { useEffect, useState } from "react";

const ToggleBtn = () => {
    const [showAlert, setShowAlert] = useState(false)
    console.log("render")
    
    /*const handleToggle = () => {
        if(showAlert) {
            setShowAlert(false)
            return
        }
        setShowAlert(true)
    }*/
     
    return ( 
        <div>
            <button style={{backgroundColor: "black", color: "white"}} onClick={() => {setShowAlert(!showAlert)}}>Toggle</button>
            {showAlert && <Alert />}
        </div>
     );

}

export const Alert = () => {
    useEffect(() => {
        const initial = setInterval(() => {
            console.log("just wow!!")
        }, 2000)
        return () => {
            clearInterval(initial)
        }
    }, [])
    return (
        <div style={{backgroundColor: "brown", width: "300px"}}>
            <h2 style={{color: "red"}}>hello world!!!</h2>
        </div>
    )
}
 
export default ToggleBtn;