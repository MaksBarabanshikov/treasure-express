import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RouteList } from "./components/Route";
import { BrowserRouter } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Scrollbars style={{ height: "100vh" }}>
          <Header />
          <RouteList />
          <Footer />
        </Scrollbars>
      </div>
    </BrowserRouter>
  );
}

export default App;
