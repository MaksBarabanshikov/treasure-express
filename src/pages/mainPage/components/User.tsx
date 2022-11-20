import avatar from "../../../assets/img/icons/avatar.svg";
import link from "../../../assets/img/icons/link_icon.svg";
import { Flex } from "../../../components/layouts/Flex";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useState } from "react";
import { setRefId } from "../../../store/slices/ReferSlice";

export const User = () => {
  const dispatch = useAppDispatch()
  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)
  const { user } = useAppSelector(state => state.user)
  const { refId } = useAppSelector(state => state.refer)

  const getReferrer = async () => await CONTRACT_LIST?.methods.getReferrer(wallet).call();

  const getReferrerId = async () => await CONTRACT_LIST?.methods.getReferrerId(wallet).call()

  getReferrer().then((user) => console.log(user))

  getReferrerId().then((id) => dispatch(setRefId(id)))

  if (user) {
    return (
      <div className="col-12 col-sm-5 mb-3 mb-sm-0">
        <Flex className="justify-content-center justify-content-sm-start">
          <img className="avatar me-4" src={avatar} alt="avatar" />
          <div className="user-section__info">
            <h4 className="text-shadow">ID {user[0]}</h4>
            <Flex>
              <span className="text-shadow">{ user[3] }</span>
              <button className="btn link-btn p-1">
                <img className="ms-3" src={link} alt="link" />
              </button>
            </Flex>
            <div>
              <span className="invited me-3 text-shadow">
                Invited 05.04.2022 by
              </span>
              <div className="user-id">
                ID { refId }
              </div>
            </div>
          </div>
        </Flex>
      </div>
    )
  }
  return(
    <div className="col-12 col-sm-5 mb-3 mb-sm-0"></div>
  )

};
