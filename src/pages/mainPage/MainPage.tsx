import React from "react";
import { LevelPrice } from "../login/components/LevelPrice";
import { UserSection } from "./components/UserSection";
import { Transactions } from "../../components/transaction/Transactions";
import { transactions } from "../../assets/data/transactions";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { Container } from "../../components/layouts/Container";
import { LevelPopup } from "../../components/popup/levePopup/LevelPopup";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setUser } from "../../store/slices/UserSlice";

export const MainPage = () => {

  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const dispatch = useAppDispatch()

  const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

  getUser().then((user) => dispatch(setUser(user)))

  return (
    <div className="wrap">
      <UserSection/>
      <LevelPopup/>
      <Container>
        <LevelPrice col={10} className={"main-level"}/>
        <InfoSection />
        <Transactions items={transactions}/>
      </Container>
    </div>
)
};
