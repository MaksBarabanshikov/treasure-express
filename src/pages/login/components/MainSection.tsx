import React from 'react';
import bigLogo from "../../../assets/img/icons/logo-big.svg";
import {connectMetamask} from "../../../store/slices/RootSlice";
import {useDispatch} from "react-redux";

const MainSection = () => {

    const dispatch = useDispatch()

    // @ts-ignore
    const handleConnectMetamask = () => dispatch(connectMetamask())

    return (
        <section className="main-section d-flex flex-column justify-content-center align-items-center">
            <img src={bigLogo} alt=""/>
            <button onClick={handleConnectMetamask} className="orange-btn btn mt-5 d-flex align-items-center">
                Connect to Metamask
            </button>
        </section>
    );
};

export default MainSection;

