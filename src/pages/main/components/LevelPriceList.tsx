import {LevelPriceData} from "../../../assets/data/price";
import {LevelItem} from "../../../components/LevelItem";

export const LevelPriceList = () => {
    return (
        <div className="level-price__list row">
            {
                LevelPriceData.map(item =>
                    (
                        <LevelItem
                            level={item.level}
                            price={item.price}
                        />
                    )
                )
            }
        </div>
    );
};
