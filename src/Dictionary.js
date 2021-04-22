import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleKeyword(input) {
    setKeyword(input.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <form
        className="search d-flex justify-content-center mx-auto"
        onSubmit={search}
      >
        <input
          type="search"
          className="form-control form-control-lg"
          placeholder="Search"
          autoComplete="none"
          onChange={handleKeyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}
