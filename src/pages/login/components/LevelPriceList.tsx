import {LevelPriceData} from "../../../assets/data/price";
import {LevelItem} from "../../../components/Level/LevelItem";
import {BNB} from "../../../helper";
import {useAppSelector} from "../../../hooks/hooks";

interface Props {
    userLevels?: any[];
    prices?: any[];
    buyLevel?: any,
    toggleModal?: any,
    getPlaceInQueue?: any,
    isMain: boolean
}

export const LevelPriceList = ({userLevels, prices, buyLevel, toggleModal, getPlaceInQueue, isMain}: Props) => {
    const {
        priceLevels,
        activeLevels,
        payoutsLevels,
        activationTimes,
        maxPayouts,
        referralPayoutSum,
        rewardSum
    } = useAppSelector(state => state.levels)

    if (priceLevels.length && activeLevels.length && isMain) {
        const disabled = (index) : boolean => {
            if (index === 1) {
                return false;
            }
            return activeLevels[index - 1] === false;
        }
        return <div className="level-price__list row">
            {
                priceLevels.map((item, index) =>
                    (
                     index !== 0 && <LevelItem
                            key={Math.random()}
                            level={"LVL " + String(index)}
                            price={BNB(priceLevels[index]).concat(" BNB")}
                            type={'complete'}
                            isActive={activeLevels[index]}
                            currentType={activeLevels[index]}
                            currentPrice={priceLevels[index]}
                            currentLevel={index}
                            payoutCounter={Number(payoutsLevels[index])}
                            payoutsLimit={maxPayouts[index]}
                            referralPayoutSum={referralPayoutSum[index]}
                            buyLevel={buyLevel}
                            getPlaceInQueue={getPlaceInQueue}
                            toggleModal={toggleModal}
                            disabled={disabled(index)}
                            isMain={isMain}
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
