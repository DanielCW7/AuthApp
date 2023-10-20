import logo from './logo.svg';
import './App.css';

function App() {
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

        <div>
          <h3> GET </h3>
          {/* for test purposes */}
          {/* API GET calls and loader here */}
          { false ? <span> nothing </span> : <span> ? </span>}
        </div>
      </header>
    </div>
  );
}

export default App;
