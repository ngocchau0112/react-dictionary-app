import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeyword(input) {
    setKeyword(input.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert("Searching");
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
          placeholder="Enter a word"
          onChange={handleKeyword}
        />
        <input
          type="submit"
          className="btn btn-outline-dark btn-lg ml-2"
          value="Search"
        />
      </form>
    </div>
  );
}
