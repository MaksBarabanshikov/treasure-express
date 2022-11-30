import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setRefAddress, setUserId } from "../../store/slices/ReferSlice";
import React, { useEffect } from "react";
import { Registration } from "../../components/popup/registration/Registration";
import { AnimatePresence } from "framer-motion";

export const LoginPage = () => {
  const { CONTRACT_LIST } = useAppSelector(state => state.web3)
  const { regIsVisible } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch();

  // const Registration = React.lazy(() => import('../../components/popup/registration/Registration').then(({ Registration }) => ({ default: Registration })))

  // const getOwner = async () => {
  //   return await CONTRACT_LIST?.methods.owner.call().call();
  // }
  const referAddress = async (id) => {
    return await CONTRACT_LIST?.methods.getUserAddressById(id).call();
  };
  useEffect(() => {
    const userId = window.location.href.split('?')
    if (userId[1]) {
      dispatch(setUserId(userId[1]))
      referAddress(userId[1]).then((res) => {
        return dispatch(setRefAddress(res))
      })
    }
  }, [window.location.href]);

  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 300,
      }
    },
    exit: {
      y: "100vh",
      opacity: 0
    }
  }

    return(
        <div className='wrap'>
            <MainSection/>
            <FooterSection/>
          <AnimatePresence
            initial={false}
            exitBeforeEnter={true}
            onExitComplete={() => null}
          >
              {regIsVisible && <Registration />}
            </AnimatePresence>
        </div>
    )
}
