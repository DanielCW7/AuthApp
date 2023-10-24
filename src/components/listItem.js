import { useState } from "react"
import { updatePost, deletePost } from '../axiosFunctions.js';

// list items to be edited or deleted in the PUT/DELETE section
const ListItem = (item) => {

    const [toggle, setToggle] = useState(true);


    // toggles the edit field on & off
    const edit = () => setToggle(prevToggle => !prevToggle)



    // DELETE http request
    const remove = (item) => {
        const id = item?.props?.id ?? ""

        try {
            deletePost(id)
            .then(res => console.log(res))
        } catch (error) {
            console.error(error)
        } finally {
            console.log("done")
        }
        console.log(item, id)
    }


    // PUT http request
    const confirmChange = (item) => {
        const id = item?.props?.id ?? ""

        setToggle(prevToggle => !prevToggle)        
        console.log(item, id)
    }


    return (
        <li>

            {/* onsubmit to capture the form input here - used for the URL params */}
            { toggle ? <p> {item.title} </p> : <input placeholder={item.title} type="text" /> }
            { toggle ? 
                <div>
                    <span onClick={edit}> edit </span>            
                    <span onClick={() => remove(item)}> delete </span>              
                </div>  
                : 
                <div>
                    <span onClick={() => confirmChange(item)}> confirm </span>            
                    <span onClick={edit}> cancel </span>            
                </div>
            }

        </li>
    )
}

export default ListItem