import {
  Routes,
  Route, Navigate, useNavigate
} from "react-router-dom";
import React, { useEffect, useState, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setIsReg } from "../store/slices/UserSlice";
import { stat } from "fs";

const LoginPage = React.lazy(() => import("../pages/login/LoginPage").then(({ LoginPage }) => ({ default: LoginPage })));
const MainPage = React.lazy(() => import("../pages/mainPage/MainPage").then(({ MainPage }) => ({ default: MainPage })));

export const RouteList = () => {
  const { status, CONTRACT_LIST, wallet } = useAppSelector(state => state.web3);
  const { isReg } = useAppSelector(state => state.user);

  const getIsUserRegistered = async (address: string) => {
    return await CONTRACT_LIST?.methods.isUserRegistered(address).call();
  };

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const Protected = (isReg) => {
    if (!isReg) {
      return navigate("/");
    }

    return navigate('/main')
  }


  useEffect(() => {
    if (status === 'fulfilled' && wallet) {
      getIsUserRegistered(wallet).then((res) => {
        dispatch(setIsReg(res))
      })
    }
  }, [wallet, status]);


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
