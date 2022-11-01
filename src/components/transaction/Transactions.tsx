import React from "react";
import { ITransaction } from "../../assets/data/transactions";
import { TransactionItem } from "./TransactionItem";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import titleTab from "../../assets/img/bg/transactions_title.png"

interface Props {
  items: ITransaction[];
}

// style={{height: 450 }}


export const Transactions = ({ items }: Props) => {
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
