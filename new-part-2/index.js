// React JS

function Tweet({ username, name, date, message }) {
    return (
      <div className="tweet">
        <strong>@{username} ({name})</strong>
        <div className="date">{date}</div>
        <div>{message}</div>
      </div>
    );
  }
  
  function App() {
    return (
      <div>
        <Tweet
          username="media_monk"
          name="Richard"
          date="May 16, 2025"
          message="The medium is the message. And the tweet is the medium."
        />
        <Tweet
          username="codewitch"
          name="Elena"
          date="May 15, 2025"
          message="React is just JavaScript with a sprinkle of magic."
        />
        <Tweet
          username="codeseeker"
          name="Lewis"
          date="May 14, 2025"
          message="One honest conversation can change a life."
        />
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  