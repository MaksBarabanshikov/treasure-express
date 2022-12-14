import coin from '../../assets/img/icons/coin.svg';
import "./Level.scss";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

type Props = {
    level: string
    price: string
    type: string
    isActive?: boolean
    buyLevel?: any
    toggleModal?: any
    getPlaceInQueue?: any
    currentLevel?: number
    currentPrice?: number
    currentType?: boolean
    payoutCounter?: number
    payoutsLimit?: number,
    referralPayoutSum?: number,
    disabled?: boolean,
    isMain?: boolean

};

export const LevelItem = ({
                              level,
                              type,
                              price,
                              buyLevel,
                              currentPrice,
                              currentType,
                              currentLevel,
                              toggleModal,
                              payoutCounter,
                              payoutsLimit,
                              getPlaceInQueue,
                              referralPayoutSum,
                              disabled,
                              isMain
                          }: Props) => {

    const [text, setText] = useState(level);

    const isCurrentTypeLevel = () => {
        if (currentType !== undefined) {
            return currentType || (Number(payoutCounter) === Number(payoutsLimit) && Number(payoutsLimit) !== 0)
        }
        return null;
    }

    const isDisabled = () => {
        if (payoutCounter && payoutsLimit) {
            return Number(payoutCounter) === Number(payoutsLimit)
        }
        return false
    }

    const getCurrentLevel = () => {
        if (currentType !== undefined) {
            if (isDisabled()) {
                return "level-price__item_current";
            }

            if (currentType) {
                return "level-price__item_complete";
            }

            if (!currentType && Number(referralPayoutSum) !== 0) {
                return "level-price__item_current";
            }

                if (!currentType) {
                    return "level-price__item_locked";
                }
        }

        if (type === 'current') {
            return 'level-price__item_current'
        }

        if (type === 'complete') {
            return 'level-price__item_complete'
        }

        return 'level-price__item_locked'
    }

    const handleBuyLevel = () => {
        if (buyLevel && currentPrice && payoutCounter !== undefined) {
            if (isCurrentTypeLevel()) {
                return toggleModal(currentLevel, price, payoutsLimit, payoutCounter)
            }

            if (currentType === false) {
                return buyLevel(Number(currentLevel), currentPrice)
            }
            return null
        }
        return null
    }

    const onEnter = () => {
        if (!isCurrentTypeLevel() && isMain) {
            setText('Buy')
        }
    }

    const onLeave = () => {
        if (!isCurrentTypeLevel() && isMain) {
            setText(level)
        }
    }

    useEffect(() => {
        if (getPlaceInQueue) {
            getPlaceInQueue(Number(currentLevel));
        }
    },[])

    return (
        <div className="col-6 col-sm-4 col-md-3 p-2">
            <button
                disabled={disabled}
                onMouseEnter={onEnter}
                onMouseLeave={onLeave}
                onClick={handleBuyLevel}
                className={`btn level-price__item w-100 ${getCurrentLevel()}`}
            >
                <motion.h3>{text}</motion.h3>
                {
                    isCurrentTypeLevel() === null &&
                    <div className="level-price__item-price">
                        <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                        <span>{price}</span>
                    </div>
                }
                {
                    isCurrentTypeLevel() && Number(payoutsLimit) !== 0 ?
                        <div className="level-price__item-price justify-content-center">
                            <span>{isDisabled() ? 'reinvest' : 'payments'}</span>
                        </div> : isCurrentTypeLevel() !== null ?
                        <div className="level-price__item-price text-center">
                            <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                            <span>{price}</span>
                        </div> : ''
                }
            </button>
        </div>
    );
};
