import React, {Suspense} from "react";
import { LevelPrice } from "../login/components/LevelPrice";
import { UserSection } from "./components/UserSection";
import { Transactions } from "../../components/transaction/Transactions";
import { transactions } from "../../assets/data/transactions";
import { InfoSection } from "../../components/infoSection/InfoSection";
import { Container } from "../../components/layouts/Container";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setUser } from "../../store/slices/UserSlice";

const LevelPopup = React.lazy(() => import('../../components/popup/levelPopup/LevelPopup')
    .then(({ LevelPopup }) => ({ default: LevelPopup })))

export const MainPage = () => {

  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const dispatch = useAppDispatch()

  const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

  getUser().then((user) => dispatch(setUser(user)))

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
