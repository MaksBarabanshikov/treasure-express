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
  // const [transitions, setTransactions] = useState([]);
  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const dispatch = useAppDispatch()

  // const getTransaction = async () => {
  //   if (wallet) {
  //     const web3 = await new Web3(Web3.givenProvider);
  //     const transactionList: any = []
  //     // const options = {
  //     //   fromBlock: 0,
  //     //   address: wallet,
  //     // };
  //
  //     const test = async () => await web3.eth.getPastLogs({
  //       fromBlock:'0',
  //       address: CONTRACT_ADDRESS,
  //       toBlock: "latest",
  //     })
  //      await test().then(res => {
  //        res.forEach(rec => {
  //           const transaction = async () => await web3.eth.getTransaction(rec.transactionHash)
  //           transaction().then((tran) => {
  //             if ( tran.from === wallet ) {
  //               transactionList.push(tran)
  //             }
  //           })
  //         });
  //        setTransactions(transactionList)
  //       }).catch(err => console.log("getPastLogs failed", err));
  //   }
  // }
  const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

  useEffect(() => {
    getUser().then((user) => dispatch(setUser(user)))
    // getTransaction()
  }, [wallet]);

  return (
    <div className="wrap">
      <UserSection/>
      <LevelPopup/>
      <Container>
        <LevelPrice col={10} className={"main-level"}/>
        <InfoSection paddingBottom={100}/>
        {/*<Transactions items={transactions}/>*/}
      </Container>
    </div>
)
};
