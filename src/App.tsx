import React from "react";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { RouteList } from "./components/Route";
import { BrowserRouter } from "react-router-dom";
import "overlayscrollbars/css/OverlayScrollbars.css"
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <OverlayScrollbarsComponent
          style={{
            height: "100vh",
            zIndex: "100"
          }}
        >
          <Header />
          <RouteList />
          <Footer />
        </OverlayScrollbarsComponent>
      </div>
    </BrowserRouter>
  );
}

export default App;
