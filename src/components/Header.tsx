import logo from '../assets/img/icons/logo.svg'
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[]);

    const handleScroll = () => setScroll(window.scrollY)

    return (
        <header className={
            scroll > 100
            ? 'header header-shadow'
                : 'header'
        }>
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
