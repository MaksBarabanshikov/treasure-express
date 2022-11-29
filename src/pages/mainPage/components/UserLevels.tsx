import {LevelPriceList} from "../../login/components/LevelPriceList";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import {useEffect, useState} from "react";
import { hidePaymentsModal, showPaymentsModal } from "../../../store/slices/ModalSlice";
import {initLevels, initPriceLevels} from "../../../store/slices/LevelSlice";

export const UserLevels = () => {
  const [userLevels, setUserLevels] = useState(null)
  const [levelsPrice, setLevelsPrice] = useState(null)
  const [resBuyLevel, setResBuyLevel] = useState(null)

  const { CONTRACT_LIST, wallet, currentGasLimit } = useAppSelector(state => state.web3)
  const { activeLevels, priceLevels } = useAppSelector(state => state.levels)
  const { paymentsIsVisible } = useAppSelector(state => state.modal)
  const dispatch = useAppDispatch()


  const getUserLevels = async () => await CONTRACT_LIST?.methods.getUserLevels(wallet).call()
  const getLevelPrices = async () => await CONTRACT_LIST?.methods.getLevelPrices().call()
  const getPlaceInQueue = async (level) => await CONTRACT_LIST?.methods.getPlaceInQueue(wallet, level).call()


  useEffect(() => {
    getUserLevels().then((levels) => {
      dispatch(initLevels({ levels }));
      setUserLevels(levels);
    })
    getLevelPrices().then((levelsPrices) => {
      dispatch(initPriceLevels(levelsPrices));
      setLevelsPrice(levelsPrices);
    })
  },[resBuyLevel, wallet])

  const handleBuyLevel = (level, price) => {
    buyLevel(level, price).then(() => setResBuyLevel(level))
  }

  const buyLevel = async (level, price) => await CONTRACT_LIST?.methods.buyLevel(level).send({
    from: wallet,
    value: price,
    gasPrice: currentGasLimit,
  })

  const toggleLevelModal = (level, price, limit, counter) => {
    if (paymentsIsVisible) {
      return dispatch(hidePaymentsModal())
    }
    return dispatch(showPaymentsModal({ level, price, limit, counter }))
  }

  if (activeLevels.length && priceLevels.length) {
   return (
       <LevelPriceList
           userLevels={activeLevels}
           prices={priceLevels}
           buyLevel={handleBuyLevel}
           toggleModal={toggleLevelModal}
           getPlaceInQueue={getPlaceInQueue}
       />
   )
  }

  return (
      <p>Загрузка</p>
  )

}
