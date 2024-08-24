import "./App.css";

const BASE_URL = "http://localhost:8080";

function App() {
  const getData = async () => {
    const result = await fetch(`${BASE_URL}/carClasses`).then((res) =>
      res.json()
    );
    console.log("result: ", result);
  };
  getData();
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://socarcorp.kr"
          target="_blank"
          rel="noopener noreferrer">
          Happy Coding 🤗
        </a>
      </header>
    </div>
  );
}

export default App;
