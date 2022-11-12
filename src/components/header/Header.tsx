import { connectWeb3 } from "../../store/slices/Web3Slice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import logo from '../../assets/img/icons/logo.svg'
import coin from '../../assets/img/icons/coin.svg'
import './header.scss';

export const Header = () => {
    const dispatch = useAppDispatch()
    const { status, walletShort, check } = useAppSelector(state => state.web3)
    // @ts-ignore
    const handleConnectMetamask = () => dispatch(connectWeb3())

    if (status === 'fulfilled') {
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
                                    <span>{check} BNB</span>
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
