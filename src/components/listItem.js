import { useState } from "react"

// list items to be edited or deleted in the PUT/DELETE section
const ListItem = (item) => {

    const [toggle, setToggle] = useState(true);

    const edit = () => {
        // toggle edit function
        setToggle(prevToggle => !prevToggle)
    }

    const remove = () => {
        // DELETE http request here
        console.log("removed")
    }

    return (
        <li>
            { toggle ? <p> {item.name} </p> : <input placeholder={item.name} type="text" /> }
            { toggle ? 
                <div>
                    <span onClick={edit}> edit </span>
                    <span onClick={remove}> delete </span>                
                </div>  
                : 
                <div>
                    <span onClick={edit}> confirm? </span>
                    <span onClick={remove}> cancel </span>                
                </div>
            }

        </li>
    )
}

export default ListItem