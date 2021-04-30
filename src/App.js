import styles from "./App.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Movies from "./components/Movies/Movies";
import Nominations from "./components/Nomitations/Nominations";

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

  // async function getData() {
  //   try {
  //     const response = await axios.get(
  //       `http://www.omdbapi.com/?s=${query}&apikey=${key}`
  //     );

  //     setData(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetchData();
    // getData();
  };
  // console.log(query);
  //console.log(data);

  return (
    <div className={styles.main}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="movie title"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <Movies movies={data} />
      {/* <Nominations /> */}
    </div>
  );
}

export default App;
