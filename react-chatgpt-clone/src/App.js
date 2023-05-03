const App = () => {
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
            <input />
            <div id="submit">➢</div>
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
