import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';


function App() {
  return (
    <div className="App">
        <Banner></Banner>
        <h1>Olá mundo</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
