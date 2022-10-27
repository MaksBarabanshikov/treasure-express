import React from 'react';
import {Header} from "./components/Header";
import {MainPage} from "./pages/main/MainPage";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <MainPage/>
        </div>
    );
}

export default App;
