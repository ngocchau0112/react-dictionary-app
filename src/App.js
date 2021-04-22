import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center mx-auto mt-5 bg-white rounded">
        <img
          width="700"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/007/662/original/11070.jpg?1619103880"
          className="img-fluid d-block"
          alt="logo"
        />
      </div>
      <Dictionary />
      <Footer />
    </div>
  );
}

export default App;
