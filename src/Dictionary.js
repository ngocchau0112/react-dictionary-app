import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import { createClient } from "pexels";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleKeyword(input) {
    setKeyword(input.target.value);
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    const client = createClient(
      "563492ad6f91700001000001b3a44ab8df6b458a98ae002af6e9c837"
    );
    const query = `${keyword}`;
    client.photos.search({ query, per_page: 3 }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
