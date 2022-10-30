import logo from '../../assets/img/icons/logo.svg'
import { Link } from "react-router-dom";
import { Registration } from "../popup/registration/Registration";
import './header.scss';

export const Header = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                    <Link to={"/"}>
                        <img src={logo} alt=""/>
                    </Link>
                    <Registration />
                </div>
            </div>
        </header>
    )
}
