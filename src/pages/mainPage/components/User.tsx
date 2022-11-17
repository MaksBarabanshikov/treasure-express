import avatar from "../../../assets/img/icons/avatar.svg";
import link from "../../../assets/img/icons/link_icon.svg";
import { Flex } from "../../../components/layouts/Flex";
import { useAppSelector } from "../../../hooks/hooks";
import { useState } from "react";

export const User = () => {

  const [user, setUser] = useState(null)

  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const getUser: any = async () => await CONTRACT_LIST?.methods.getUser(wallet).call();

  getUser().then((user) => setUser(user))

  if (user) {
    return (
      <div className="col-12 col-sm-5 mb-3 mb-sm-0">
        <Flex className="justify-content-center justify-content-sm-start">
          <img className="avatar me-4" src={avatar} alt="avatar" />
          <div className="user-section__info">
            <h4 className="text-shadow">ID {user[1]}</h4>
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
                ID 31224822
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
