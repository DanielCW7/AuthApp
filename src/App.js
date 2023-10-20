import logo from './logo.svg';
import Loader from "./components/loader";
import { getUsers } from './axiosFunctions.js';
import './App.css';
import { useEffect, useState } from 'react';
import Error from "./components/error"
function App() {
  const [isLoading, setLoading] = useState(true);
  const [users, setUsers] = useState([])



  useEffect(() => {
    const handleFetch = async () => {
      try {
        getUsers()
        .then(res => {

          const list = res.data;
          const everyone = list.map(element => {
            return <li> {element.name} </li>
          });

          setUsers(everyone)
        })
      }
      catch(error) {
        console.error(error)
        setUsers(<Error />)
      }
      finally {
        // set loading to false once either the request is approved or fails
        console.log("done fetching")
        setLoading(false)
      }
    } 
    
    // setTimeout(() => handleFetch() , 1000)
    // handleFetch()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h1> api calls here: </h1>

      {/* GET */}
        <div>
          <h3> GET users </h3>
          {/* <button onClick={handleFetch}> get user </button> */}
          <ul>
            { isLoading ? <Loader /> : users }            
          </ul>
        </div>


      {/* POST */}
        <div>
          <h3> POST users </h3>
          {/* <button onClick={handleFetch}> get user </button> */}
          <ul>
            { isLoading ? <Loader /> : users }            
          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;
