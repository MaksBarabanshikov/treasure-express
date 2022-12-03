import React, { useEffect, useState } from "react";
import { ITransaction } from "../../assets/data/transactions";
import { TransactionItem } from "./TransactionItem";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import titleTab from "../../assets/img/bg/transactions_title.png"
import { useAppSelector } from "../../hooks/hooks";
import axios from "axios";

interface Props {
  items: ITransaction[];
}

export const Transactions = ({ items }: Props) => {
  const [tran, setTran] = useState([]);
  const { wallet } = useAppSelector(state => state.web3)

  useEffect(() => {
    if (wallet) {
      axios.get('https://api.bscscan.com/api' +
        '?module=account' +
        '&action=txlistinternal' +
        // `&address=${wallet}` +
        "&address=0x3fa40c4a5e791a4bf21897540c3e594a9cbb35dff1f1a518fb0fa1e0d9986946" +
        '&sort=asc' +
        '&apikey=UH2TYAEM94FQDYN5AB47TGINPENFDWJCE6')
        .then(r => console.log(r))
    }
  }, [wallet]);



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
            items.map((item) => (
              <TransactionItem
                key={item.id}
                id={item.id}
                idUser={item.idUser}
                type={item.type}
                description={item.description}
                created_at={item.created_at}
              />
            ))
          }
        </OverlayScrollbarsComponent>
      </div>
    </div>
  );
};
