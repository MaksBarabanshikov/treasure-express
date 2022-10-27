import coin from '../assets/img/coin.svg'
type Props = {
    level: string
    price: string
};

export const LevelItem = (props: Props) => {
    return (
        <div className="col-3 p-2" >
            <button className="btn level-price__item w-100">
                <h3>{props.level}</h3>
                <div className="level-price__item-price">
                    <img style={{width: 37, height: 37}} src={coin} alt="coin"/>
                    <span>{props.price}</span>
                </div>
            </button>
        </div>
    );
};
