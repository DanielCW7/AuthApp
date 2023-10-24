import { useState } from "react"

// list items to be edited or deleted in the PUT/DELETE section
const ListItem = (item) => {

    const [toggle, setToggle] = useState(true);

    const remove = (item) => {
        // DELETE http request
        setToggle(prevToggle => !prevToggle)
        console.log(item)
    }

    const confirmChange = (item) => {
        // PUT http request
        setToggle(prevToggle => !prevToggle)
        console.log(item)
    }
    return (
        <li>

            {/* onsubmit to capture the form input here - used for the URL params */}
            { toggle ? <p> {item.name} </p> : <input placeholder={item.name} type="text" /> }
            { toggle ? 
                <div>
                    <span onClick={() => setToggle(prevToggle => !prevToggle)}> edit </span>            
                    <span onClick={remove}> delete </span>              
                </div>  
                : 
                <div>
                    <span onClick={confirmChange(item)}> confirm </span>            
                    <span onClick={() => setToggle(prevToggle => !prevToggle)}> cancel </span>            
                </div>
            }

        </li>
    )
}

export default ListItem