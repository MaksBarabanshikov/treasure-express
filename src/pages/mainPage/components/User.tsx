import avatar from "../../../assets/img/icons/avatar.svg";
import link from "../../../assets/img/icons/link_icon.svg";
import { Flex } from "../../../components/layouts/Flex";

export const User = () => {
  return (
    <div className="col-5">
      <Flex>
        <img className="avatar me-4" src={avatar} alt="avatar" />
        <div className="user-section__info">
          <h4 className="text-shadow">ID 36651822</h4>
          <Flex>
            <span className="text-shadow">0x982140...A3bf2e</span>
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
};
