import {useState, useEffect} from 'react';

const App = () => {
  const [value, setValue] = useState(null);
  const [message, setMessage] = useState(null);
  const getMessages = async () => {
    const options = {
      method: "POST",
      body: JSON.stringify({
        message: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
    try {
      const response = await fetch('http://localhost:8000/completions', options)
      const data = await response.json()
      console.log(data)
      setMessage(data.choices[0].message)
    } catch (error) {
      console.error(error)
    }
  }
console.log(message)

  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New Chat</button>
        <ul className="history">
          <li>SCHNITZEL</li>
        </ul>
        <nav>
          <p>Made by Felix</p>
        </nav>
      </section>
      <section className="main">
        <h1>FelixGPT</h1>
        <ul className="feed">
        </ul>
        <div className="bottom-section">
          <div className="input-container">
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <div id="submit" onClick={getMessages}>➢</div>
          </div>
          <p className="info">
            This is a simple clone of ChatGPT utilizing the OpenAI API
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
