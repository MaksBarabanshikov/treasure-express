import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";
import { useAppDispatch } from "../../hooks/hooks";
import { setUserId } from "../../store/slices/ReferSlice";
import { useEffect } from "react";

export const LoginPage = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const userId = window.location.href.split('?')

    if (userId[1]) {
      dispatch(setUserId(userId[1]))
    }
  }, [window.location.href]);

    return(
        <div className='wrap'>
            <MainSection/>
            <FooterSection/>
        </div>
    )
}
