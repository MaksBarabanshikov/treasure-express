import React, {useEffect, useState} from "react";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {RouteList} from "./components/Route";
import {BrowserRouter} from "react-router-dom";
import "overlayscrollbars/css/OverlayScrollbars.css"
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {Registration} from "./components/popup/registration/Registration";
import {useSelector} from "react-redux";

function App() {
    const { disabled } = useSelector((state: any) => state.scroll)
    const [height, setHeight] = useState({
        height: '100vh',
        zIndex: 100
    });
    useEffect(() => {
        if (disabled) {
            setHeight({
                height: "",
                zIndex: 100
            })
        } else {
            setHeight({
                height: '100vh',
                zIndex: 100
            })
        }
    },[disabled])

    return (
        <BrowserRouter>
            <div className="wrapper">
                <OverlayScrollbarsComponent
                    style={height}
                >
                    <Registration/>
                    <Header/>
                    <RouteList/>
                    <Footer/>
                </OverlayScrollbarsComponent>
            </div>
        </BrowserRouter>
    );
}

export default App;
