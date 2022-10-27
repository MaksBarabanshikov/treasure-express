import React from 'react';
import bigLogo from "../../../assets/img/logo-big.svg";

const MainSection = () => {
    return (
        <section className="main-section d-flex flex-column justify-content-center align-items-center">
            <img src={bigLogo} alt=""/>
            <button className="orange-btn btn mt-5">
                Connect to Metamask
            </button>
        </section>
    );
};

export default MainSection;

