import logo from './logo.svg';
import Loader from "./components/loader";
import { getPosts, addPost, updatePost } from './axiosFunctions.js';
import './App.css';
import { useEffect, useState } from 'react';
import Error from "./components/error";
import ListItem from './components/listItem';

function App() {
  
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([])
  const [postList, putPosts] = useState([])


  useEffect(() => {

    // for only GET requests
    const handleFetch = async () => {
      try {
        getPosts()
        .then(res => {
          console.log(res)

          const list = res.data;
          const items = list.map(element => {
            return <li> {element.name} </li>
          });

          const putList = list.map(element => {
            return <ListItem name={element.name} data={element.data} />
          })
          setPosts(items)
          putPosts(putList)
        })
      } catch(error) {
        console.error(error)
        setPosts(<Error />)
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
    // replace with form field data - submit works as intended
    event.preventDefault()

    // be sure to check if field is not empty upon submit
    try {
      addPost({
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
    <body className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1> API app </h1>
        <sub> https://api.restful-api.dev/ </sub>
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
            <button type="submit"> submit changes </button>        
            
            {/* 
              need to be able to select an item, and then edit the contents - then submit the changes 
              [EDIT] [CANCEL] [CONFIRM CHANGES] [DISCARD CHANGES]
            */}
            
          </form> 
        </div>

      </main>

    </body>
  );
}

export default App;
