import React, { Suspense, useEffect } from "react";
import { LevelPrice } from "../login/components/LevelPrice";
import { UserSection } from "./components/UserSection";
import { Transactions } from "../../components/transaction/Transactions";
import { transactions } from "../../assets/data/transactions";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { Container } from "../../components/layouts/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setUser } from "../../store/slices/UserSlice";

export const MainPage = () => {
  const LevelPopup = React.lazy(() => import('../../components/popup/levelPopup/LevelPopup')
    .then(({ LevelPopup }) => ({ default: LevelPopup })))
  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const dispatch = useAppDispatch()

  const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

  useEffect(() => {
    getUser().then((user) => dispatch(setUser(user)))
  }, [wallet]);

  return (
    <div className="wrap">
      <UserSection/>
        <Suspense fallback={''}>
            <LevelPopup/>
        </Suspense>
      <Container>
        <LevelPrice col={10} className={"main-level"}/>
        <InfoSection />
        <Transactions items={transactions}/>
      </Container>
    </div>
)
};
