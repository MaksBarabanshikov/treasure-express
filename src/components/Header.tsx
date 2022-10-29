import logo from '../assets/img/icons/logo.svg'
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                    <Link to={"/"}>
                        <img src={logo} alt=""/>
                    </Link>
                    <button className="green-btn btn">
                        Connect metamask
                    </button>
                </div>
            </div>
        </header>
    )
}
