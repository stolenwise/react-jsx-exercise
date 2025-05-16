function Tweet({ username, name, date, message }) {
    return (
      <div className="tweet">
        <strong>@{username} ({name})</strong>
        <div className="date">{date}</div>
        <div>{message}</div>
      </div>
    );
  }
export {Tweet};