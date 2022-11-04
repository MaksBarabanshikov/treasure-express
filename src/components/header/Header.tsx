import logo from '../../assets/img/icons/logo.svg'
import {Link, useLocation} from "react-router-dom";
import { Registration } from "../popup/registration/Registration";
import './header.scss';
import coin from '../../assets/img/icons/coin.svg'

export const Header = () => {
    const location = useLocation();

    if (location.pathname === '/main') {
        return (
            <header className='header'>
                <div className="container">
                    <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                        <Link className="logo" to={"/"}>
                            <img src={logo} alt=""/>
                        </Link>

                        <div className="header__info d-flex align-items-center flex-nowrap">
                            <div className="header__value">
                                <img src={coin} alt="coin"/>
                                <div>
                                    <span>0,00485 BNB</span>
                                    <span>0x1901...Eb</span>
                                </div>
                            </div>
                            <button style={{width: 150}} className="upline btn">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                    <Link className="logo" to={"/"}>
                        <img src={logo} alt=""/>
                    </Link>
                    <Registration />
                </div>
            </div>
        </header>
    )
}
