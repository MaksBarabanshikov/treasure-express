import {LevelPriceData} from "../../../assets/data/price";
import {LevelItem} from "../../../components/Level/LevelItem";
import {BNB} from "../../../helper";

interface Props {
    userLevels?: any[];
    prices?: any[];
    buyLevel?: any,
    toggleModal?: any,
}

export const LevelPriceList = ({ userLevels, prices, buyLevel, toggleModal }: Props) => {

    if (userLevels && prices) {
        const currentLevels = userLevels[1].slice(1, userLevels[1].length)
        const currentPrices = prices.slice(1, prices.length)
        const currentType = userLevels[0].slice(1, userLevels[0].length)
        const payoutCounter = userLevels[3].slice(1, userLevels[3].length)

        return <div className="level-price__list row">

            {
                currentLevels.map((item, index) =>
                  (
                    <LevelItem
                      key={Math.random()}
                      level={"LVL " + String(index + 1)}
                      price={BNB(currentPrices[index]).concat(" BNB")}
                      type={'complete'}
                      currentType={currentType[index]}
                      currentPrice={currentPrices[index]}
                      currentLevel={index}
                      payoutCounter={Number(payoutCounter[index])}
                      buyLevel={buyLevel}
                      toggleModal={toggleModal}
                    />
                  )
                )
            }
        </div>
    }
    return (
        <div className="level-price__list row">
            {
                LevelPriceData.map(item =>
                    (
                        <LevelItem
                            key={item.id}
                            level={item.level}
                            price={item.price}
                            type={item.type}
                        />
                    )
                )
            }
        </div>
    );
};
