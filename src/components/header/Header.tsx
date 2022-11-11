import logo from '../../assets/img/icons/logo.svg'
import { Link } from "react-router-dom";
import { connectMetamask } from "../../store/slices/WalletSlice";
import './header.scss';
import coin from '../../assets/img/icons/coin.svg'
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";

export const Header = () => {
    const dispatch = useAppDispatch()
    const walletStatus = useAppSelector(state => state.wallet.status)
    const walletShort = useAppSelector(state => state.wallet.walletShort)
    const walletBalance = useAppSelector(state => state.wallet.balance)
    // @ts-ignore
    const handleConnectMetamask = () => dispatch(connectMetamask())

    if (walletStatus === 'fulfilled') {
        return (
            <header className='header'>
                <div className="container">
                    <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                        <Link className="logo" to={"/"}>
                            <img src={logo} alt=""/>
                        </Link>

                        <div className="header__info d-flex align-items-center justify-content-end flex-nowrap">
                            <div className="header__value">
                                <img src={coin} alt="coin"/>
                                <div>
                                    <span>{walletBalance} BNB</span>
                                    <span>{walletShort}</span>
                                </div>
                            </div>
                            {/*<button style={{width: 150}} className="upline btn">*/}
                            {/*    Sign Out*/}
                            {/*</button>*/}
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
                    <button onClick={handleConnectMetamask} className="green-btn btn">
                        Connect metamask
                    </button>
                </div>
            </div>
        </header>
    )
}
