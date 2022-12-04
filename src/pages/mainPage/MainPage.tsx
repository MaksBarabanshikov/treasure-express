import React, {useEffect, useState} from "react";
import {LevelPrice} from "../login/components/LevelPrice";
import {UserSection} from "./components/UserSection";
import {Transactions} from "../../components/transaction/Transactions";
import {InfoSection} from "../../components/infoSection/InfoSection";
import {Container} from "../../components/layouts/Container";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setUser} from "../../store/slices/UserSlice";
import {LevelPopup} from "../../components/popup/levelPopup/LevelPopup";
import Web3 from "web3";
import {CONTRACT_ADDRESS} from "../../contract/config";
import {formatDateForTransaction} from "../../helper";

export const MainPage = () => {
    const [transaction, setTransactions] = useState([]);
    const {CONTRACT_LIST, wallet} = useAppSelector(state => state.web3)

    const dispatch = useAppDispatch()

    const getTransaction = async () => {
        if (wallet) {
            setTransactions([])
            const web3 = await new Web3(Web3.givenProvider);
            const transactionList: any = []

            const myTransactions = async () => await web3.eth.getPastLogs({
                fromBlock: '0',
                address: CONTRACT_ADDRESS,
                toBlock: "latest",
            })

            const getBlock = async (blockNumber, tran) => {
                const createCurrentTransactionItem = async () => {
                    const {timestamp} = await web3.eth.getBlock(blockNumber);

                    const currentStamp = new Date(Number(timestamp) * 1000)
                    const currentTx = {...tran, timestamp, created_at: formatDateForTransaction(currentStamp)}


                    if (transactionList.length > 0) {
                        if (!transactionList.find(tx => tx.blockHash === tran.blockHash)) {
                            transactionList.push(currentTx)
                        }
                    }
                    else {
                        transactionList.push(currentTx)
                    }
                    setTransactions(transactionList.sort((a, b) => b.timestamp - a.timestamp))
                }

                createCurrentTransactionItem()
            }

            await myTransactions().then(res => {
                res.forEach(rec => {
                    const transaction = async () => await web3.eth.getTransaction(rec.transactionHash)
                    transaction().then((tran) => {
                        if (tran.from === wallet) {
                            getBlock(tran.blockNumber, tran)
                        }
                    })
                });
            }).catch(err => console.log("getPastLogs failed", err));
        }
    }
    const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

    useEffect(() => {
        getUser().then((user) => dispatch(setUser(user)))
        getTransaction()
    }, [wallet]);


    return (
        <div className="wrap">
            <UserSection/>
            <LevelPopup/>
            <Container>
                <LevelPrice col={10} className={"main-level"}/>
                <InfoSection/>
                <Transactions items={transaction}/>
            </Container>
        </div>
    )
};
