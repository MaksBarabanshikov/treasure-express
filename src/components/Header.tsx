import logo from '../assets/img/logo.svg'
import {useEffect, useState} from "react";

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
                    <img src={logo} alt=""/>

                    <button className="green-btn btn">
                        Connect metamask
                    </button>
                </div>
            </div>
        </header>
    )
}
