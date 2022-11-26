import { CloseIcon } from "../../Icons/closeIcon";
import head from "../../../assets/img/bg/popup-level-head.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import coin from "../../../assets/img/icons/coin.svg";
import { Flex } from "../../layouts/Flex";
import { disabledScroll, enabledScroll } from "../../../store/slices/ScrollSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { hidePaymentsModal } from "../../../store/slices/ModalSlice";
import {BNB} from "../../../helper";

export const LevelPopup = () => {
  const [queue, setQueue] = useState(0)
  const [price, setPrice] = useState(null)
  const { paymentsIsVisible, paymentsLevel, paymentsPrice, limit, counter } = useAppSelector(state => state.modal)
  const { CONTRACT_LIST, wallet, currentGasLimit } = useAppSelector(state => state.web3)
  const dispatch = useAppDispatch()


  const getPlaceInQueue = async () => await CONTRACT_LIST?.methods.getPlaceInQueue(wallet, paymentsLevel + 1).call()

    useEffect(() => {
      const queueAsync = async () => {
        await getPlaceInQueue().then((res) => {
          console.log(res);
          setQueue(Math.round((res[0] / res[1]) * 100));
        })
      }

      const interval = setInterval(queueAsync, 1000);

      if (!paymentsIsVisible) {
        clearInterval(interval)
      }

      if (queue === 100) {
        clearInterval(interval)
      }
      return () => clearInterval(interval)
    },[paymentsIsVisible, queue])

  // @ts-ignore
  useEffect(() => {
    if (paymentsIsVisible) {
      dispatch(disabledScroll())
      currentPriceLevel()
    }
    return () => {
      return dispatch(enabledScroll());
    }
  },[paymentsIsVisible, dispatch])

  const handleChangeVisible = () => {
    return dispatch(hidePaymentsModal())
  };

  const currentPriceLevel = async () => {
    await CONTRACT_LIST?.methods.levelPrice(paymentsLevel + 1).call().then((res) => {
      setPrice(res)
    })
  }

  const buyLevel = async () => await CONTRACT_LIST?.methods.buyLevel(paymentsLevel + 1).send({
    from: wallet,
    value: price,
    gasPrice: currentGasLimit,
  }).on('receipt', (res) => {
    handleChangeVisible()
  })

  const handleClick = async () => {
    if (Number(limit) === Number(counter)) {
      return await buyLevel()
    }
    else {
      return handleChangeVisible()
    }
  }

    return (
      <>
        {paymentsIsVisible && <div className="popup text-shadow level-popup">
          <div className="popup__body">
            <button onClick={handleChangeVisible} className="popup__close btn position-absolute">
              <CloseIcon />
            </button>
            <div className="popup__title">
              <h5>LVL { paymentsLevel + 1 }</h5>
              <div style={{maxWidth: 100, margin: '10px auto', height: 20, fontSize: 10}} className="level-price__item-price">
                <img style={{width: 27, height: 27}} src={coin} alt="coin"/>
                <span>{ paymentsPrice }</span>
              </div>
            </div>
            <div className="popup__head mt-5">
              <img src={head} alt="" />
              <h1>{counter} of {limit}</h1>
            </div>
            {Number(limit) !== Number(counter) && <ProgressBar labelColor={"#000"} bgColor={'#FFD640'} className={'my-progress'} completed={queue}/>}
            <Flex className="justify-content-between justify-content-lg-center mb-3 mb-lg-4">
              <div className="popup__cols me-5">
                <span className="d-block mb-3">Partners bonus</span>
                <div className="level-price__item-price">
                  <img style={{width: 48, height: 48}} src={coin} alt="coin"/>
                  <span>{price ? BNB(price): 0} BNB</span>
                </div>
              </div>
              <div className="popup__cols">
                <span className="d-block mb-3">Level profit</span>
                <div className="level-price__item-price">
                  <img style={{width: 48, height: 48}} src={coin} alt="coin"/>
                  <span>{ price ? BNB(price) : 0 } BNB</span>
                </div>
              </div>
            </Flex>
            <a onClick={handleClick} className="green-btn btn d-inline-flex align-items-center justify-content-center rounded">
              Reinvest
            </a>
          </div>
        </div>
        }
      </>
    );
};
