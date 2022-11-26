import coin from '../../assets/img/icons/coin.svg';
import "./Level.scss";

type Props = {
    level: string
    price: string
    type: string
    buyLevel?: any
    toggleModal?: any
    currentLevel?: string
    currentPrice?: string
    currentType?: boolean
    payoutCounter?: number
};

export const LevelItem = ({ level, type, price, buyLevel, currentPrice, currentType, currentLevel, toggleModal, payoutCounter}: Props) => {

    const isCurrentTypeLevel = () => {
        if (currentType !== undefined) {
            return currentType && payoutCounter === 3
        }
        return null;
    }

    const getCurrentLevel = () => {
        if (currentType !== undefined) {
            if (isCurrentTypeLevel()) {
                return 'level-price__item_current'
            }

            if (currentType) {
                return "level-price__item_complete"
            }

            if (!currentType) {
                return 'level-price__item_locked'
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
        if (buyLevel && currentPrice && payoutCounter) {
            console.log(payoutCounter);
            if (isCurrentTypeLevel()) {
                return toggleModal(currentLevel, price)
            }

            if (currentType === false || (currentType && payoutCounter < 3) ) {
                return buyLevel(Number(currentLevel) + 1, currentPrice)
            }
            return null
        }
        return null
    }

    return (
      <div className="col-6 col-sm-4 col-md-3 p-2" >
          <button className={`btn level-price__item w-100 ${getCurrentLevel()}`}>
              <h3>{level}</h3>
              {
                  isCurrentTypeLevel() === null &&
                <div className="level-price__item-price">
                    <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                    <span>{price}</span>
                </div>
              }
              {
                isCurrentTypeLevel() ?
                  <div onClick={handleBuyLevel} className="level-price__item-price justify-content-center">
                      <span>reinvest</span>
                  </div> :
                  <div onClick={handleBuyLevel} className="level-price__item-price text-center">
                      <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                      <span>{price}</span>
                  </div>
              }
          </button>
      </div>
    );
};
