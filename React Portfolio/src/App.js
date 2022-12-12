import React from "react";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Run app
function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
