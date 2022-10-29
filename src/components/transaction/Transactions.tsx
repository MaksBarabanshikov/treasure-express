import { ITransaction } from "../../assets/data/transactions";
import { TransactionItem } from "./TransactionItem";
import Scrollbars from "react-custom-scrollbars-2";

interface Props {
  items: ITransaction[];
}

export const Transactions = ({ items }: Props) => {
  return (
    <div className="transactions">
      <div className="transactions__scroll">
        <Scrollbars
          style={{ overflowX: 'hidden' ,height: 450 }}

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
        </Scrollbars>
      </div>
    </div>
  );
};
