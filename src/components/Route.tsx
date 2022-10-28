import {
  Routes,
  Route,
} from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { MainPage } from "../pages/mainPage/Main";

export const RouteList = () => {
  return (
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/main" element={<MainPage/>}/>
      </Routes>
  )
}
