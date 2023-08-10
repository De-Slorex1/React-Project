import { useState } from "react";

const frameworks = ["Vue JS", "Angular JS", "Next JS", "Node JS"]

const Select = () => {
    
    const [framework, setFramework] = useState("React JS")

    const handleChange = (e) => {
        setFramework(e.target.value)
    }

    return ( 
        <div>
            <form>
                <select onChange={handleChange} value={framework} name="framework">
                    {frameworks.map((framework) => {
                        return (
                            <option key={framework}>{framework}</option>
                        )
                    })}
                </select>
            </form>
        </div>
     );
}
 
export default Select;