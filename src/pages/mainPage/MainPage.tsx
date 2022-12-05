import React, {useEffect} from "react";
import {LevelPrice} from "../login/components/LevelPrice";
import {UserSection} from "./components/UserSection";
import {Transactions} from "../../components/transaction/Transactions";
import {InfoSection} from "../../components/infoSection/InfoSection";
import {Container} from "../../components/layouts/Container";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setUser} from "../../store/slices/UserSlice";
import {LevelPopup} from "../../components/popup/levelPopup/LevelPopup";

export const MainPage = () => {
    const {CONTRACT_LIST, wallet} = useAppSelector(state => state.web3)

    const dispatch = useAppDispatch()

    const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

    useEffect(() => {
        getUser().then((user) => dispatch(setUser(user)))
    }, [wallet]);


    return (
        <div className="wrap">
            <UserSection/>
            <LevelPopup/>
            <Container>
                <LevelPrice col={10} className={"main-level"}/>
                <InfoSection/>
                <Transactions />
            </Container>
        </div>
    )
};
