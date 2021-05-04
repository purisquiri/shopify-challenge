import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Movies from "./components/Movies/Movies";
import Nominations from "./components/Nominations/Nominations";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState({ Search: [] });
  const key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    fetchData();
  }, [query]);

  const fetchData = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${query}&apikey=${key}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className={styles.main}>
      <div className={styles.search}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search a title"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
      </div>
      <div className={styles.infoMovies}>
        <Movies movies={data} query={query} />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
