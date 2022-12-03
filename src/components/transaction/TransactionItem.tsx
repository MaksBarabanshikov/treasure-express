import { ITransaction } from "../../assets/data/transactions";
import present from "../../assets/img/icons/present.svg";
import coin from "../../assets/img/icons/coin-big.svg";
import { IdUser } from "../IdUser";
import { Flex } from "../layouts/Flex";
import { ShareIcon } from "../Icons/ShareIcon";

export const TransactionItem = ({id }: ITransaction) => {
  return (
      <Flex className="transactions__item justify-content-between ps-2 pe-4">
        <Flex>
          {/*<img className="me-3" src={type === "present" ? present : coin} alt="" />*/}
          {/*<IdUser id={idUser} />*/}
          {/*<Flex className="transactions__text ms-3">*/}
          {/*  {*/}
          {/*    description.map((text, index) => {*/}
          {/*      if (index === 1) {*/}
          {/*        return (<span key={text} className="transaction__price me-1 text-shadow">{text}</span>)*/}
          {/*      }*/}
          {/*      return (<span key={text} className="me-1 text-shadow">{text}</span>)*/}
          {/*    })*/}
          {/*  }*/}
          {/*</Flex>*/}
        </Flex>
        <Flex>
          <button className="btn p-0">
            <ShareIcon />
          </button>
          {/*<span className="ms-3 created-at text-shadow">- {created_at}</span>*/}
        </Flex>
      </Flex>
  );
};
