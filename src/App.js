import logo from './logo.svg';
import Loader from "./components/loader";
import { getPosts, addPost } from './axiosFunctions.js';
import './App.css';
import { useEffect, useState } from 'react';
import Error from "./components/error"
function App() {
  const [isLoading, setLoading] = useState(true);
  const [posts, setPosts] = useState([])



  // displays posts onload
  useEffect(() => {
    const handleFetch = async () => {
      try {
        getPosts()
        .then(res => {

          console.log(res)
          const list = res.data;
          const everyone = list.map(element => {
            return <li> {element.title} </li>
          });

          setPosts(everyone)
        })
      }
      catch(error) {
        console.error(error)
        setPosts(<Error />)
      }
      finally {
        // set loading to false once either the request is approved or fails
        console.log("done fetching")
        setLoading(false)
      }
    } 
    
    // setTimeout(() => handleFetch() , 1000)
    handleFetch()
  }, [])


  // const addPost = (event) => {
  //   event.preventDefault()
  //   try {
  //     addPost({
  //       body: JSON.stringify({
  //         title: "foo",
  //         body: "bar",
  //         userId: 1
  //       }),
  //       headers: {
  //         "Content-Type": "application/json; charset=UTF-8"
  //       }
  //       .then(res => {
  //         console.log(res)
  //       })
  //     })
  //   } catch(error) {
  //     console.error(error)
  //   } finally {
  //     console.log("done")
  //   }
  // }


  return (
    <body className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />


        <h1> Github Oauth app </h1>
        <h2> note: HTTP requests besides GET do not work with this API </h2>



      </header>      
      
      {/* GET */}
      <main>
        <div>
          <h3> GET posts </h3>
          {/* <button onClick={handleFetch}> get user </button> */}
          <ul>
            { isLoading ? <Loader /> : posts }            
          </ul>
        </div>


      {/* POST */}
        <div>
          <h3> POST </h3>
          <form onSubmit={addPost}>
            <p> add user below </p>
            <input type="text"/>
            <button type="submit"> submit </button>
          </form>
        </div>
      </main>

    </body>
  );
}

export default App;
