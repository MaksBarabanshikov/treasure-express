import { CloseIcon } from "../../Icons/closeIcon";
import head from "../../../assets/img/bg/popup-level-head.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import coin from "../../../assets/img/icons/coin.svg";
import { Flex } from "../../layouts/Flex";
import { disabledScroll, enabledScroll } from "../../../store/slices/ScrollSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { hidePaymentsModal, showPaymentsModal } from "../../../store/slices/ModalSlice";

export const LevelPopup = () => {
  const { paymentsIsVisible } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()

  // @ts-ignore
  useEffect(() => {
    if (paymentsIsVisible) {
      dispatch(disabledScroll())
    }
    return () => dispatch(enabledScroll())
  },[paymentsIsVisible, dispatch])

  const handleChangeVisible = () => {
    if (paymentsIsVisible) {
    return dispatch(hidePaymentsModal())
    }
    return dispatch(showPaymentsModal())
  };
    return (
      <>
        {paymentsIsVisible && <div className="popup text-shadow level-popup">
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
            <ProgressBar labelColor={"#000"} bgColor={'#FFD640'} className={'my-progress'} completed={90}/>
            <Flex className="justify-content-between justify-content-lg-center mb-3 mb-lg-4">
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
