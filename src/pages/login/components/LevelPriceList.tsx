import {LevelPriceData} from "../../../assets/data/price";
import {LevelItem} from "../../../components/Level/LevelItem";

export const LevelPriceList = () => {
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
