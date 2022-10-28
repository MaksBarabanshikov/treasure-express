import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RouteList } from "./components/Route";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <RouteList />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
