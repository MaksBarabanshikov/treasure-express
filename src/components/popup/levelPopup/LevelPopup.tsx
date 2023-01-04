import { CloseIcon } from "../../Icons/closeIcon";
import { useEffect, useState } from "react";
import { Flex } from "../../layouts/Flex";
import { disabledScroll, enabledScroll } from "../../../store/slices/ScrollSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { hidePaymentsModal } from "../../../store/slices/ModalSlice";
import { BNB } from "../../../helper";
import { animate, AnimatePresence, motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";
import head from "../../../assets/img/bg/popup-level-head.png";
import coin from "../../../assets/img/icons/coin.svg";

export const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 20,
      stiffness: 150,
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
}

export const LevelPopup = () => {
  const [queue, setQueue] = useState({value: 0, text: 'ahead'});
  const [price, setPrice] = useState(null);
  const { paymentsIsVisible, paymentsLevel, paymentsPrice, limit, counter } = useAppSelector(state => state.modal);
  const { CONTRACT_LIST, wallet, currentGasLimit } = useAppSelector(state => state.web3);
  const { referralPayoutSum, rewardSum } = useAppSelector(state => state.levels);
  const dispatch = useAppDispatch();


  const getPlaceInQueue = async () => await CONTRACT_LIST?.methods.getPlaceInQueue(wallet, paymentsLevel).call()

    useEffect(() => {
      const queueAsync = async () => {
        await getPlaceInQueue().then((res) => {
          console.log(res);
          const placeInLine = Number(res[0]) === 1 ? res[0] : Number(res[0]) - 1;
          const totalSeats = Number(res[1]);
          const currentValue =  1 - (placeInLine / totalSeats)
          const value = Math.round(currentValue * 100);
          console.log(placeInLine);
          setQueue({value, text: placeInLine + ' ' + 'ahead'});
        })
      }

      const interval = setInterval(queueAsync, 1000);

      if (!paymentsIsVisible) {
        clearInterval(interval)
      }

      const clear = () => {
        setQueue({ value: 0, text: 'ahead' });
        clearInterval(interval);
      }

      return () => clear()
    },[paymentsIsVisible])

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
    await CONTRACT_LIST?.methods.levelPrice(paymentsLevel).call().then((res) => {
      setPrice(res)
    })
  }

  const buyLevel = async () => await CONTRACT_LIST?.methods.buyLevel(paymentsLevel).send({
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

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 20,
        stiffness: 150,
      }
    },
    exit: {
      y: "100vh",
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  }

    return (
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {paymentsIsVisible && <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3
              }
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.3
              }
            }}
            className="popup text-shadow level-popup"
          >
            <motion.div
              variants={dropIn}
              initial={'hidden'}
              animate={'visible'}
              exit={'exit'}
              className="popup__body"
            >
              <button onClick={handleChangeVisible} className="popup__close btn position-absolute">
                <CloseIcon />
              </button>
              <div className="popup__title">
                <h5>LVL {paymentsLevel}</h5>
                <div style={{ maxWidth: 100, margin: "10px auto", height: 20, fontSize: 10 }}
                     className="level-price__item-price">
                  <img style={{ width: 27, height: 27 }} src={coin} alt="coin" />
                  <span>{paymentsPrice}</span>
                </div>
              </div>
              <div className="popup__head mt-5">
                <img src={head} alt="" />
                <h1>{counter} of {limit}</h1>
              </div>
              {Number(limit) !== Number(counter) && <div className="position-relative">
                <span className="progress-span position-absolute">{ queue.text }</span>
                <ProgressBar
                    height={"34px"}
                    borderRadius={"13px"}
                    width={"96.5%"}
                    labelColor={"#fff"}
                    labelSize={"26px"}
                    bgColor={"#FFD640"}
                    className={"my-progress"}
                    completed={queue.value}
                    baseBgColor={"transparent"}
                    labelAlignment={"center"}
                />
              </div>
              }
              <Flex className="justify-content-between justify-content-lg-center mb-3 mb-lg-4">
                <div className="popup__cols me-5">
                  <span className="d-block mb-3">Partners bonus</span>
                  <div className="level-price__item-price">
                    <img style={{ width: 48, height: 48 }} src={coin} alt="coin" />
                    <span>{price ? BNB(referralPayoutSum[paymentsLevel]) : 0} BNB</span>
                  </div>
                </div>
                <div className="popup__cols">
                  <span className="d-block mb-3">Level profit</span>
                  <div className="level-price__item-price">
                    <img style={{ width: 48, height: 48 }} src={coin} alt="coin" />
                    <span>{price ? BNB(rewardSum[paymentsLevel]) : 0} BNB</span>
                  </div>
                </div>
              </Flex>
              <a onClick={handleClick}
                 className="green-btn btn d-inline-flex align-items-center justify-content-center rounded">
                Reinvest
              </a>
            </motion.div>
          </motion.div>
          }
        </AnimatePresence>
    );
};
