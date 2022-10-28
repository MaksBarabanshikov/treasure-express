import React from 'react';
import bigLogo from "../../../assets/img/logo-big.svg";
import { Link } from "react-router-dom";

const MainSection = () => {
    return (
        <section className="main-section d-flex flex-column justify-content-center align-items-center">
            <img src={bigLogo} alt=""/>
            <Link to={'/main'} className="orange-btn btn mt-5 d-flex align-items-center">
                Connect to Metamask
            </Link>
        </section>
    );
};

export default MainSection;

