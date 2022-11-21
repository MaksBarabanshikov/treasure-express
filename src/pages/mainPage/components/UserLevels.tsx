import {LevelPriceList} from "../../login/components/LevelPriceList";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {useEffect, useState} from "react";
import { hidePaymentsModal, showPaymentsModal } from "../../../store/slices/ModalSlice";

export const UserLevels = () => {
  const [userLevels, setUserLevels] = useState(null)
  const [levelsPrice, setLevelsPrice] = useState(null)
  const [resBuyLevel, setResBuyLevel] = useState(null)

  const { CONTRACT_LIST, wallet, currentGasLimit } = useAppSelector(state => state.web3)
  const { paymentsIsVisible } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()


  const getUserLevels = async () => await CONTRACT_LIST?.methods.getUserLevels(wallet).call()
  const getLevelPrices = async () => await CONTRACT_LIST?.methods.getLevelPrices().call()

  useEffect(() => {
    getUserLevels().then((levels) => setUserLevels(levels))
    getLevelPrices().then((levelsPrices) => setLevelsPrice(levelsPrices))
  },[resBuyLevel])

  const handleBuyLevel = (level, price) => {
    buyLevel(level, price).then(() => setResBuyLevel(level))
  }

  const buyLevel = async (level, price) => await CONTRACT_LIST?.methods.buyLevel(level).send({
    from: wallet,
    value: price,
    gasPrice: "22000000000",
  })

  const toggleLevelModal = () => {
    if (paymentsIsVisible) {
      return dispatch(hidePaymentsModal())
    }
    return dispatch(showPaymentsModal())
  }



  return (
    (levelsPrice && userLevels) &&
    <LevelPriceList
      userLevels={userLevels}
      prices={levelsPrice}
      buyLevel={handleBuyLevel}
      toggleModal={toggleLevelModal}
    />
  )
}
