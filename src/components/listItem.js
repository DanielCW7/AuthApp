import { useState } from "react"
import axios from "axios";


const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" })


// list items to be edited or deleted in the PUT/DELETE section
const ListItem = (item) => {

    const [toggle, setToggle] = useState(true);


    // toggles the edit field on & off
    const edit = () => setToggle(prevToggle => !prevToggle)



    // DELETE http request
    const remove = (item) => {
        const id = item?.props?.id ?? ""
        try {
            const deletePost = async (id) => {
                return api.patch(`/posts/${id}`)
            }

            deletePost(id)
            .then(res => console.log(res))
        } catch (error) {
            console.error(error)
        } finally {
            console.log("DELETE has finished")
        }
        console.log(item, id)
    }


    // PUT http request
    const confirmChange = (item, text) => {
        const id = item?.props?.id ?? ""
        
        try {
            const updatePost = async (id, text) => {
                const newText = text
                return api.put(`/posts/${id}`, {
                  "body": newText
                })
            }

            updatePost(id, text)
            .then(res => console.log(res))
        } catch(error) {
            console.error(error)
        } finally {
            console.log("PUT has finished")
        }
        
        setToggle(prevToggle => !prevToggle)        
        console.log(item, id, text)
    }


    return (
        <li>

            {/* onsubmit to capture the form input here - used for the URL params */}
            { toggle ? <p> {item.title} </p> : <input placeholder={item.title} type="text" id="textBox" /> }
            { toggle ? 
                <div>
                    <span onClick={edit}> edit </span>            
                    <span onClick={() => remove(item)}> delete </span>              
                </div>  
                : 
                <div>
                    <span onClick={() => {
                        const text = document.querySelector("#textBox").value
                        confirmChange(item, text)
                    }}> confirm </span>            
                    <span onClick={edit}> cancel </span>            
                </div>
            }

        </li>
    )
}

export default ListItem