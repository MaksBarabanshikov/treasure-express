import { CloseIcon } from "../../Icons/closeIcon";
import head from "../../../assets/img/bg/popup-level-head.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import coin from "../../../assets/img/icons/coin.svg";
import { Flex } from "../../layouts/Flex";

export const LevelPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChangeVisible = () => setIsVisible(!isVisible);
    return (
      <>
        <button onClick={handleChangeVisible} className="green-btn btn">
          Level Popup
        </button>
        {isVisible && <div className="popup text-shadow level-popup">
          <div className="popup__body">
            <button onClick={handleChangeVisible} className="popup__close btn position-absolute">
              <CloseIcon />
            </button>
            <div className="popup__title">
              <h5>LVL 1</h5>
              <div style={{maxWidth: 100, margin: '10px auto', height: 20, fontSize: 10}} className="level-price__item-price">
                <img style={{width: 27, height: 27}} src={coin} alt="coin"/>
                <span>0.05 BNB</span>
              </div>
            </div>
            <div className="popup__head mt-5">
              <img src={head} alt="" />
              <h1>0 of 3</h1>
            </div>
            <ProgressBar labelColor={"#000"} bgColor={'#FFD640'} className={'my-progress'} completed={45}/>
            <Flex className="justify-content-center mb-5">
              <div className="popup__cols me-5">
                <span className="d-block mb-3">Partners bonus</span>
                <div className="level-price__item-price">
                  <img style={{width: 48, height: 48}} src={coin} alt="coin"/>
                  <span>0.05 BNB</span>
                </div>
              </div>
              <div className="popup__cols">
                <span className="d-block mb-3">Level profit</span>
                <div className="level-price__item-price">
                  <img style={{width: 48, height: 48}} src={coin} alt="coin"/>
                  <span>0.05 BNB</span>
                </div>
              </div>
            </Flex>
            <Link onClick={handleChangeVisible} to={'/main'} className="green-btn btn d-inline-flex align-items-center justify-content-center rounded">
              Reinvest
            </Link>
          </div>
        </div>
        }
      </>
    );
};
