import {
  Routes,
  Route, Navigate
} from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { MainPage } from "../pages/mainPage/MainPage";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/hooks";

const Protected = ({ isReg, children }) => {
  if (!isReg) {
    return <Navigate to={'/'} replace />
  }

  return children;
}

export const RouteList = () => {
  const [isReg, setIsReg] = useState(false)
  const { CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const getIsUserRegistered = async (address: string) => {
    if (CONTRACT_LIST && address) {
      const isUserRegistered = await CONTRACT_LIST.methods.isUserRegistered(address).call()
      setIsReg(isUserRegistered)
    }
  }
  useEffect(() => {
    if (wallet) {
      getIsUserRegistered(wallet)
    }
  }, [wallet]);


  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/main" element={
          <Protected isReg={isReg}>
            <MainPage />
          </Protected>
        }/>
      </Routes>
  )
}
