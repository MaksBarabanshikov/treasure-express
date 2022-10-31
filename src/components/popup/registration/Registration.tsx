import { useState } from "react";
import { Flex } from "../../layouts/Flex";
import title from "../../../assets/img/bg/reg_title.png";
import { CloseIcon } from "../../Icons/closeIcon";
import { Link } from "react-router-dom";
import { Row } from "../../layouts/Row";

export const Registration = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisible = () => setIsVisible(!isVisible);

  return (
    <>
      <button onClick={handleChangeVisible} className="green-btn btn">
        Connect metamask
      </button>
      {isVisible && <div className="popup popup-reg text-shadow">
        <div className="popup__body">
          <button onClick={handleChangeVisible} className="popup__close btn position-absolute">
            <CloseIcon />
          </button>
          <div className="popup__title">
            <img src={title} alt="" />
          </div>
          <span className="popup-reg__activate">Activate account in one transaction with BNB</span>
          <h4>Your upline address and ID</h4>
          <Flex className="justify-content-center">
            <div className="input-label w-100">
              <span>Upline address:</span>
              <Row>
                <div className="input col-6">
                  <input type="text" value={1526} />
                  <span className="status">1</span>
                </div>
                <button className="upline btn col-5">Approve upline</button>
              </Row>
            </div>
          </Flex>
          <p>
            You take all the responsibility for you actions. By interacting with the smart contract, you agree to the
            rules of the game and understand that all blockchain transactions are irrevocable.
          </p>
          <Link onClick={handleChangeVisible} to={"/main"} className="border-btn-small btn">
            Confirm registration (0.025 BNB)
          </Link>
        </div>
      </div>
      }
    </>
  );
};
