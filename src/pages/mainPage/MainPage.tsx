import React from "react";
import { BgSection } from "./components/BgSection";
import { LevelPrice } from "../login/components/LevelPrice";
import { UserSection } from "./components/UserSection";
import { Transactions } from "../../components/transaction/Transactions";
import { transactions } from "../../assets/data/transactions";
import { InfoSection } from "../../components/InfoSection";
import { Container } from "../../components/layouts/Container";

export const MainPage = () => {
  return (
    <div className="wrap">
      <UserSection />
      <Container>
        <LevelPrice col={10} className={"main-level"}/>
        <InfoSection />
        <Transactions items={transactions}/>
      </Container>
    </div>
)
};
