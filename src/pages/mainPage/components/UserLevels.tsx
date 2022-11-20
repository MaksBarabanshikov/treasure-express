import {LevelPriceList} from "../../login/components/LevelPriceList";
import {useAppSelector} from "../../../hooks/hooks";
import {useEffect, useState} from "react";

export const UserLevels = () => {
  const [userLevels, setUserLevels] = useState(null)
  const [levelsPrice, setLevelsPrice] = useState(null)
  const [resBuyLevel, setResBuyLevel] = useState(null)

  const { CONTRACT_LIST, wallet, currentGasLimit } = useAppSelector(state => state.web3)

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

  return (levelsPrice && userLevels) && <LevelPriceList userLevels={userLevels} prices={levelsPrice} buyLevel={handleBuyLevel}/>
}
