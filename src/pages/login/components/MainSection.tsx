import React, {useEffect, useState} from 'react';
import bigLogo from "../../../assets/img/icons/logo-big.svg";
import { connectWeb3 } from "../../../store/slices/Web3Slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { showRegModal } from "../../../store/slices/ModalSlice";
import {useNavigate} from "react-router-dom";

const MainSection = () => {
    const [isReg, setIsReg] = useState<null | boolean>(null);
    const { CONTRACT_LIST, status } = useAppSelector(state => state.web3)
    const wallet = useAppSelector(state => state.web3.wallet)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const getIsUserRegistered = async (address: string) => {
        if (CONTRACT_LIST && address) {
            const isUserRegistered = await CONTRACT_LIST.methods.isUserRegistered(address).call()
            setIsReg(isUserRegistered)
        }
    }

    useEffect(() => {
        if (wallet) {
            getIsUserRegistered(wallet)
        }
    },[wallet])

    useEffect(() => {
        if (isReg) {
            navigate('/main')
        }
    },[isReg])

    // @ts-ignore
    const handleConnectMetamask = () => dispatch(connectWeb3())

    const handleShowRegistration = () => {
      dispatch(showRegModal())
    }

    return (
        <section className="main-section d-flex flex-column justify-content-center align-items-center">
            <img src={bigLogo} alt=""/>
          {isReg === null
            ?
            <button onClick={handleConnectMetamask} className="orange-btn btn mt-5 d-flex align-items-center">
                Connect to Metamask
            </button>
              : !isReg?
            <button onClick={handleShowRegistration} className="orange-btn btn mt-5 d-flex align-items-center">
              Register and Play
            </button> : ''
          }
        </section>
    );
};

export default MainSection;

