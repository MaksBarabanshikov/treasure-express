import React from 'react';
import bigLogo from "../../../assets/img/icons/logo-big.svg";
import {connectMetamask} from "../../../store/slices/WalletSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { showRegModal } from "../../../store/slices/ModalSlice";

const MainSection = () => {

    const dispatch = useAppDispatch()
    const wallet = useAppSelector(state => state.wallet.wallet)

    // @ts-ignore
    const handleConnectMetamask = () => dispatch(connectMetamask())

    const handleShowRegistration = () => {
      dispatch(showRegModal())
    }

    return (
        <section className="main-section d-flex flex-column justify-content-center align-items-center">
            <img src={bigLogo} alt=""/>
          {wallet === null
            ?
            <button onClick={handleConnectMetamask} className="orange-btn btn mt-5 d-flex align-items-center">
                Connect to Metamask
            </button>
            :
            <button onClick={handleShowRegistration} className="orange-btn btn mt-5 d-flex align-items-center">
              Register and Play
            </button>
          }
        </section>
    );
};

export default MainSection;

