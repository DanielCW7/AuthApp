import logo from '../logo.svg';
import Loader from "../components/loader";
import { useEffect, useState } from 'react';
import ListItem from '../components/listItem';
import axios from "axios";

const api = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/" })


const Home = () => {

    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([])
    const [postList, putPosts] = useState([])
  
  
    useEffect(() => {
  
      // for only GET requests
      const handleFetch = async () => {
        try {
          const getPosts = async () => {
            return api.get("/posts")
          }  

          getPosts().then(res => {
            console.log(res)
  
            const list = res.data;
            console.log(res.data)
            const items = list.map(element => {
              return <li> {element.title} </li>
            });
  
            const putList = list.map(element => {
              return <ListItem title={element.title} props={element} />
            })
            setPosts(items)
            putPosts(putList)
          })
        } catch(error) {
          console.error(error)
        } finally {
          // set loading to false once either the request is approved or fails
          console.log("GET has finished")
          setLoading(false)
        }
      } 
  
  
      handleFetch()
    }, [])
  
      // for only PUT requests
      const handlePut = (event) => {
        event.preventDefault()
        console.log(event)
        try {
          const updatePost = async (id, text) => {
            const newText = text
            return api.put(`/posts/${id}`, {
              "body": newText
            })
          }
          
          updatePost()
          .then(res => {
            console.log(res)
          })
        } catch (error) {
          console.log(error)
        } finally {
          console.log("PUT has finished")
          setLoading(false)
        }
      }
  
    const handleSubmit = (event) => {
      // replace with form field data - submit works as intended => body object should be in axiosfunctions file*
      event.preventDefault()
  
      // be sure to check if field is not empty upon submit
      try {
        const addPost = async (postData) => {
          return api.post("/posts", postData)
        }

        addPost({
          // *
          name: "name",
          data: {
            year: 2012,
            price: 100,
            capacity: "a lot",
            color: "blue"
          } 
        })
        .then(res => console.log(res))
      } catch(error) {
        console.error(error)
      } finally {
        console.log("done")
      }
    }

    
    return (
        <body>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1> API app </h1>
                <sub> https://jsonplaceholder.typicode.com/ </sub>
            </header>      
            
            {/* GET */}
            <main>
                <div>
                <h3> GET </h3>
                {/* <button onClick={handleFetch}> get user </button> */}
                <ul>
                    { isLoading ? <Loader /> : posts }            
                </ul>
                </div>


            {/* POST */}
                <div>
                <h3> POST </h3>
                <form id="postForm" onSubmit={handleSubmit}>
                    <p> add user below </p>
                    <input type="text" id="userAdd" />
                    <button type="submit"> submit </button>
                </form>
                </div>


            {/* PUT/PATCH (UPDATE) */}
                <div>
                <h3> PUT & DELETE </h3>
                <form id="putForm" onSubmit={handlePut}> 
                    <p> update post </p>
                    <ul>
                    { isLoading ? <Loader /> : postList }   
                    </ul> 
                    
                </form> 
                </div>

            </main>
        </body>
    )
}

export default Home