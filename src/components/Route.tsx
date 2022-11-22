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
  const { status, CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const getIsUserRegistered = async (address: string) => {
      const isUserRegistered = await CONTRACT_LIST!.methods.isUserRegistered(address).call()
      setIsReg(isUserRegistered)
  }

  useEffect(() => {
    if (wallet && status === 'fulfilled' && CONTRACT_LIST) {
      getIsUserRegistered(wallet)
    }
  }, [wallet, status, CONTRACT_LIST]);


  return (
     status === "fulfilled" ? <Routes>
       {
         isReg ? <Route path="/main" element={<MainPage/>}/> : <Route path="/" element={<LoginPage/>}/>
       }
      </Routes> : <p>Загрузка...</p>
  )
}
