import { useState } from "react"

const CheckBox = () => {
    const [agreement, setAgreement] = useState(false)
    const handleCheck = (e) => {
        setAgreement(e.target.checked)
        console.log("checked")
    }

    return ( 
        <div>
            <form>
                <label>Courses</label><br/>
                <input type="checkbox"
                className="checkbox"
                value={agreement}
                onChange={handleCheck}
                checked={agreement}
                />
                <label>HTML</label><br/>
                <input type="checkbox"
                className="checkbox"
                value={agreement}
                onChange={handleCheck}
                checked={agreement}
                />
                <label>CSS</label><br/>
                <input type="checkbox"
                className="checkbox"
                value={agreement}
                onChange={handleCheck}
                checked={agreement}
                />
                <label>JavaScript</label>
            </form>
        </div>
     );
}
 
export default CheckBox;