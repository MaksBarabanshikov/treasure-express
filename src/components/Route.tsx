import {
  Routes,
  Route, Navigate, useNavigate
} from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useAppSelector } from "../hooks/hooks";

const LoginPage = React.lazy(() => import('../pages/login/LoginPage').then(({ LoginPage }) => ({ default: LoginPage })))
const MainPage = React.lazy(() => import('../pages/mainPage/MainPage').then(({ MainPage }) => ({ default: MainPage })))

export const RouteList = () => {
  const [isReg, setIsReg] = useState(false)
  const { status, CONTRACT_LIST, wallet } = useAppSelector(state => state.web3)

  const navigate = useNavigate()

  const getIsUserRegistered = async (address: string) => {
      const isUserRegistered = await CONTRACT_LIST!.methods.isUserRegistered(address).call()
      setIsReg(isUserRegistered)
  }

  const Protected = (isReg) => {
    if (!isReg) {
      return navigate('/')
    }

    return navigate('/main')
  }


  useEffect(() => {
    if (wallet && status === 'fulfilled' && CONTRACT_LIST) {
      getIsUserRegistered(wallet)
    }
  }, [wallet, status, CONTRACT_LIST]);


  useEffect(() => {
  Protected(isReg)
  }, [isReg]);



  return (
     <Routes>
         <Route path="/main" element={<MainPage/>}/>
         <Route path="/" element={<LoginPage/>}/>
      </Routes>
  )
}
