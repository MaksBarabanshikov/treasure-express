import { useEffect, useRef, useState } from "react";
import { Flex } from "../../layouts/Flex";
import title from "../../../assets/img/bg/reg_title.png";
import { CloseIcon } from "../../Icons/closeIcon";
import { useNavigate } from "react-router-dom";
import { Row } from "../../layouts/Row";
import { disabledScroll, enabledScroll } from "../../../store/slices/ScrollSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { hideRegModal } from "../../../store/slices/ModalSlice";
import checkSvg from "../../../assets/img/bg/check.svg";
import { setRefAddress, setUserId } from "../../../store/slices/ReferSlice";
import { AnimatePresence, motion } from "framer-motion";
import { dropIn } from "../levelPopup/LevelPopup";

export const Registration = () => {
  const [disabled, setDisabled] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const inputRef: any = useRef();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { CONTRACT_LIST, wallet, currentGasLimit } = useAppSelector(state => state.web3);
  const { userId, refAddress } = useAppSelector(state => state.refer);
  const { regIsVisible } = useAppSelector(state => state.modal);

  const referId = async () => {
    return await CONTRACT_LIST?.methods.getReferrerId(userId).call();
  };
  const referIdInput = async (id) => {
    return await CONTRACT_LIST?.methods.getUserAddressById(id).call();
  };

  const handleHideRegistration = async () => {
    await dispatch(hideRegModal());
  };

  const registerUser = async () => {

    const registrationPrice = await CONTRACT_LIST?.methods.registrationPrice().call();

    if (userId === '1') {
      await CONTRACT_LIST!.methods.register().send({
        from: wallet,
        value: registrationPrice,
        gasPrice: currentGasLimit
      }).on("receipt", (res) => {
        console.log(res);
      });
    }

    if (userId !== '1') {
      await CONTRACT_LIST!.methods.registerWithReferrer(refAddress).send({
        from: wallet,
        value: registrationPrice,
        gasPrice: currentGasLimit
      });
    }
    await handleHideRegistration();
    navigate("/main");
  };

  const handleCheckUserId = () => {
    referIdInput(inputRef.current.value).then((res) => {
      if (res === "0x0000000000000000000000000000000000000000") {
        setDisabled(true);
        return setError("No such user");
      }
      setError(null);
      dispatch(setUserId(inputRef.current.value));
      dispatch(setRefAddress(res))
      setDisabled(false);
    });
  };
  // @ts-ignore
  useEffect(() => {
    if (regIsVisible) {
      dispatch(disabledScroll());
    }
    return () => dispatch(enabledScroll());
  }, [regIsVisible]);

  useEffect(() => {
    if (userId === null || userId === '0') {
      dispatch(setUserId(1))
      referIdInput(1).then((res) => {
        dispatch(setRefAddress(res));
      })
    }

    if (userId) {
      inputRef.current.value = userId;
    }
  }, [userId]);

  useEffect(() => {
    const el2 = inputRef.current;
    console.log('value: ',el2); // 👈️ element here
  }, [inputRef]);

  return (
        <motion.div
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
          className="popup popup-reg text-shadow"
        >
        <motion.div
          variants={dropIn}
          initial={'hidden'}
          animate={'visible'}
          exit={'exit'}
          className="popup__body"
        >
          <button onClick={handleHideRegistration} className="popup__close btn position-absolute">
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
                <div className="input col-6 position-relative">
                  <input ref={inputRef} onInput={() => setDisabled(true)} type="text" />
                  {error !== null && <div className="error-message text-danger position-absolute">{error}</div>}
                  <span className="status"><img src={checkSvg} alt={"treasure-express"} /></span>
                </div>
                <button onClick={handleCheckUserId} className="upline btn col-5">Approve upline</button>
              </Row>
            </div>
          </Flex>
          <p>
            You take all the responsibility for you actions. By interacting with the smart contract, you agree to the
            rules of the game and understand that all blockchain transactions are irrevocable.
          </p>
          <button disabled={disabled} onClick={registerUser} className="border-btn-small btn">
            Confirm registration (0.025 BNB)
          </button>
        </motion.div>
      </motion.div>
  );
};
