import React from 'react';
import {Header} from "./components/Header";
import {MainPage} from "./pages/main/MainPage";
import {Footer} from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <MainPage/>
            <Footer/>
        </div>
    );
}

export default App;
