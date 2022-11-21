import { connectWeb3 } from "../../store/slices/Web3Slice";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import logo from '../../assets/img/icons/logo.svg'
import coin from '../../assets/img/icons/coin.svg'
import './header.scss';
import { BNB } from "../../helper";
import { useEffect, useState } from "react";

export const Header = () => {
    const [currentCheck, setCurrentCheck] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const { status, walletShort, check } = useAppSelector(state => state.web3)
    const handleConnectMetamask = () => dispatch(connectWeb3())


    useEffect(() => {
        if (check !== null) {
            const BNBString = BNB(check.toString())

            if (BNBString.indexOf('.')) {
                const result = BNB(check.toString()).split(".")
                const endResult = result[1].slice(0, 2)
                setCurrentCheck(result[0].concat('.', endResult))
            }
            else {
                setCurrentCheck(BNBString)
            }
        }
    }, [check]);



    if (status === 'fulfilled') {
        return (
            <header className='header'>
                <div className="container">
                    <div className="header__wrap d-flex justify-content-between align-items-center w-100">
                        <div className="logo">
                            <img src={logo} alt=""/>
                        </div>

                        <div className="header__info d-flex align-items-center justify-content-end flex-nowrap">
                            <div className="header__value">
                                <img src={coin} alt="coin"/>
                                <div>
                                    <span>{currentCheck} BNB</span>
                                    <span>{walletShort}</span>
                                </div>
                            </div>
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
