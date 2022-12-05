import React, {useEffect, useState} from "react";
import { TransactionItem } from "./TransactionItem";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import titleTab from "../../assets/img/bg/transactions_title.png"
import {BNB, formatDateForTransaction} from "../../helper";
import {getCurrentTextToTx} from "../../assets/data/offers";
import Web3 from "web3";
import {CONTRACT_ADDRESS} from "../../contract/config";
import {useAppSelector} from "../../hooks/hooks";
import {transactions} from "../../assets/data/transactions";

export const Transactions = () => {
    const [transaction, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState<any>(1);
    const {CONTRACT_LIST, wallet} = useAppSelector(state => state.web3)

    const getTransaction = async () => {

            setTransactions([])
            setLoading(true);

            const web3 = await new Web3(Web3.givenProvider);
            const transactionList: any = transaction;

            const latest = await web3.eth.getBlockNumber();

            const limit = 5

            let currentStep: any = latest - (limit * page)
            let currentFromBlock = page === 1 ? latest : latest - (limit * (page - 1))

            const last = await web3.eth.getBlock(currentStep)


        if (currentStep < 0) {
                setPage('last')
            }

            if (await last) {
                console.log(last)
            }

            const myTransactions = async () => await web3.eth.getPastLogs({
                address: CONTRACT_ADDRESS,
                fromBlock: currentStep,
                toBlock: currentFromBlock,
            })

            const getBlock = async (blockNumber, tran) => {
                    const {timestamp} = await web3.eth.getBlock(blockNumber);

                    const userId = await CONTRACT_LIST?.methods.getUserIdByAddress(tran.from).call()
                    const currentStamp = new Date(Number(timestamp) * 1000)
                    const currentTx = await {
                        ...tran,
                        timestamp,
                        created_at: formatDateForTransaction(currentStamp),
                        userId,
                    }

                    if (transactionList.length > 0) {
                        if (!transactionList.find(tx => tx.blockHash === tran.blockHash)) {
                            transactionList.push(currentTx)
                        }
                    }
                    else {
                        transactionList.push(currentTx)
                    }
                // @ts-ignore
                return setTransactions([...transactionList].sort((a, b) => b.timestamp - a.timestamp))
            }

            await myTransactions().then(async (res) => {
                if (page !== 1 && res.length === 0) {
                    return setPage('last')
                } else if (page !== 'last') {
                    console.log('else');
                    res.forEach((rec) => {
                        const transaction = async () => await web3.eth.getTransaction(rec.transactionHash);
                        transaction().then(tran => getBlock(tran.blockNumber, tran));
                    });
                }
            }).catch(err => console.log("getPastLogs failed", err));

        setLoading(false);
    }

    useEffect( () => {
        if (page !== 'last') {
            getTransaction()
        }
    }, [page]);

    // useEffect(() => {
  //   if (wallet) {
  //     axios.get('https://api.bscscan.com/api' +
  //       '?module=account' +
  //       '&action=txlistinternal' +
  //       // `&address=${wallet}` +
  //       "&address=0x3fa40c4a5e791a4bf21897540c3e594a9cbb35dff1f1a518fb0fa1e0d9986946" +
  //       '&sort=asc' +
  //       '&apikey=UH2TYAEM94FQDYN5AB47TGINPENFDWJCE6')
  //       .then(r => console.log(r))
  //   }
  // }, [wallet]);
  //
  // useEffect(() => {
  //   items.forEach(item => console.log(item))
  // },[items])



  return (
    <div className="transactions">
      <img className="transactions__title" src={titleTab} alt="Transaction title" />
      <div className="transactions__scroll">
        <OverlayScrollbarsComponent
          className="transactions__overlay"
          style={{
            height: 450
          }}
        >
          {
            transaction.length ? transaction.map((item: any, index) => (
              <TransactionItem
                key={Math.random()}
                id={String(index)}
                createdAt={item.created_at}
                text={getCurrentTextToTx(item.value)}
                price={BNB(item.value)}
                userId={item.userId}
              />
            )) : <h2 className={'text-white text-center mt-4'}>Empty :(</h2>
          }
            {
                (transaction.length && page !== 'last') && <a
                    style={{display: "block",  fontSize: 16, textAlign: "center", cursor: "pointer" }}
                    className='text-white'
                    onClick={() => setPage(page + 1)}
                >
                    Load more
                </a>
            }
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};
