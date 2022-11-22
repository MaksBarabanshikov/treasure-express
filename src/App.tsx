import React, {useEffect, useState} from "react";
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {RouteList} from "./components/Route";
import {BrowserRouter} from "react-router-dom";
import "overlayscrollbars/css/OverlayScrollbars.css"
import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import {Registration} from "./components/popup/registration/Registration";
import {useSelector} from "react-redux";
import { CONTRACT_ABI, CONTRACT_ADDRESS,TREASURE_EXPRESS_ADDRESS,TREASURE_EXPRESS_ABI } from "./contract/config";
import Web3 from "web3";
import {useAppDispatch} from "./hooks/hooks";
import { connectWeb3, getListABI } from "./store/slices/Web3Slice";

function App() {
    const initialHeight = {
        height: '100vh',
        zIndex: 100
    }

    const [height, setHeight] = useState({ ...initialHeight });
    const { disabled } = useSelector((state: any) => state.scroll)

    const dispatch = useAppDispatch()


    const connectContract = async () => {
        const web3 = new Web3(Web3.givenProvider);
        const list = await new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
        dispatch(getListABI(list));
    }

    useEffect(() => {
        connectContract().then()

        const accounts: any = localStorage.getItem("accounts")
          ? JSON.parse(localStorage.getItem("accounts")!)
          : null

        if (accounts !== null) {
            dispatch(connectWeb3())
        }

        window.ethereum?.on('accountsChanged', () => dispatch(connectWeb3()))
    },[])


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
                    <main style={{minHeight: '100vh'}}>
                        <RouteList />
                    </main>
                    <Footer/>
                </OverlayScrollbarsComponent>
            </div>
        </BrowserRouter>
    );
}

export default App;
