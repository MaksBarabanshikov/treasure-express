import React from "react";
import { LevelPrice } from "../login/components/LevelPrice";
import { UserSection } from "./components/UserSection";
import { Transactions } from "../../components/transaction/Transactions";
import { transactions } from "../../assets/data/transactions";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { Container } from "../../components/layouts/Container";
import { LevelPopup } from "../../components/popup/levePopup/LevelPopup";

export const MainPage = () => {
  return (
    <div className="wrap">
      <UserSection />
      <LevelPopup/>
      <Container>
        <LevelPrice col={10} className={"main-level"}/>
        <InfoSection />
        <Transactions items={transactions}/>
      </Container>
    </div>
)
};
