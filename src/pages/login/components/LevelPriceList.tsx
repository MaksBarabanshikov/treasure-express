import {LevelPriceData} from "../../../assets/data/price";
import {LevelItem} from "../../../components/Level/LevelItem";
import {BNB} from "../../../helper";

interface Props {
    userLevels?: any[];
    prices?: any[];
    buyLevel?: any
}

export const LevelPriceList = ({ userLevels, prices, buyLevel }: Props) => {

    if (userLevels && prices) {
        return <div className="level-price__list row">
            {
                userLevels[1].map((item, index) =>
                  (
                    <LevelItem
                      key={Math.random()}
                      level={"LVL " + String(index + 1)}
                      price={BNB(prices[index]).concat(" BNB")}
                      type={'complete'}
                      currentType={userLevels[0][index]}
                      currentPrice={prices[index]}
                      currentLevel={index}
                      buyLevel={buyLevel}
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
