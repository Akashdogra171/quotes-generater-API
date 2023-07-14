import React from "react";
import { useState, useEffect } from "react";
import "./app.css";
const App = () => {
  const [quotes, setQuotes] = useState("");
  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randNumber = Math.floor(Math.random() * data.length);
        setQuotes(data[randNumber]);
      });
  };
  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="app">
      <div className="quote">
        <p>{quotes.text}</p>
        <p> BY: {quotes.author}</p>
        <div className="btn-container">
          <button className="btn" onClick={getQuotes}>
            Get A quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
