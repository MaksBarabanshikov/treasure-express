import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setRefAddress, setUserId } from "../../store/slices/ReferSlice";
import React, { Suspense, useEffect } from "react";

export const LoginPage = () => {
  const { CONTRACT_LIST } = useAppSelector(state => state.web3)
  const { regIsVisible } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch();

  const Registration = React.lazy(() => import('../../components/popup/registration/Registration').then(({ Registration }) => ({ default: Registration })))

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

    return(
        <div className='wrap'>
            <MainSection/>
            <FooterSection/>
          <Suspense fallback={""}>
            {regIsVisible && <Registration />}
          </Suspense>
        </div>
    )
}
