import avatar from "../../../assets/img/icons/avatar.svg";
import link from "../../../assets/img/icons/link_icon.svg";
import { Flex } from "../../../components/layouts/Flex";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect } from "react";
import { setUserId } from "../../../store/slices/ReferSlice";
import { formatDate, getShortWallet } from "../../../helper";

export const User = () => {
  const dispatch = useAppDispatch()

  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)
  const { user } = useAppSelector(state => state.user)
  const { userId } = useAppSelector(state => state.refer)

  const getReferrer = async () => await CONTRACT_LIST?.methods.getReferrer(wallet).call();

  const getReferrerId = async () => await CONTRACT_LIST?.methods.getReferrerId(wallet).call()

  useEffect(() => {
    getReferrer()
    getReferrerId().then((id) => dispatch(setUserId(id)))
  }, [wallet]);

    return user && <div className="col-12 col-sm-5 mb-3 mb-sm-0">
        <Flex className="justify-content-center justify-content-sm-start">
          <img className="avatar me-4" src={avatar} alt="avatar" />
          <div className="user-section__info">
            <h4 className="text-shadow">ID {user[0]}</h4>
            <Flex>
              <span className="text-shadow">{ wallet !== null ? getShortWallet(wallet) : wallet }</span>
              <button className="btn link-btn p-1">
                <img className="ms-3" src={link} alt="link" />
              </button>
            </Flex>
            <div>
              <span className="invited me-3 text-shadow">
                Invited { formatDate(new Date(Number(user[1]) * 1000)) } by
              </span>
              <div className="user-id">
                ID { userId }
              </div>
            </div>
          </div>
        </Flex>
      </div>
};
