import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/words`)
      .then(r => r.json())
      .then(console.log)
  }, [])

  return (
    <div className="App">
      <h1>testing db.json</h1>
    </div>
  );
}

export default App;
