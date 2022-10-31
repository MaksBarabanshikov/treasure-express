import coin from '../../assets/img/icons/coin.svg';
import "./Level.scss";

type Props = {
    level: string
    price: string
    type: string
};

export const LevelItem = ({level, type, price}: Props) => {

    const getCurrentLevel = () => {
        if (type === 'current') {
            return 'level-price__item_current'
        }

        if (type === 'complete') {
            return 'level-price__item_complete'
        }

        return 'level-price__item_locked'
    }

    return (
        <div className="col-6 col-sm-4 col-md-3 p-2" >
            <button className={`btn level-price__item w-100 ${getCurrentLevel()}`}>
                <h3>{level}</h3>
                <div className="level-price__item-price">
                    <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                    <span>{price}</span>
                </div>
            </button>
        </div>
    );
};
