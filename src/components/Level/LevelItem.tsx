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
};

export const LevelItem = ({ level, type, price, buyLevel, currentPrice, currentType, currentLevel, toggleModal}: Props) => {

    const getCurrentLevel = () => {
        if (currentType !== undefined) {
            return currentType ? ("level-price__item_complete") : ('level-price__item_locked')
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
        if (buyLevel && currentPrice) {
            return toggleModal(currentLevel, price)
            // return buyLevel(currentLevel, currentPrice)
        }
        return null
    }

    return (
      <div className="col-6 col-sm-4 col-md-3 p-2" >
          <button onClick={() => handleBuyLevel()} className={`btn level-price__item w-100 ${getCurrentLevel()}`}>
              <h3>{level}</h3>
              <div className="level-price__item-price">
                  <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                  <span>{price}</span>
              </div>
          </button>
      </div>
    );
};
