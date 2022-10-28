import {LevelPriceList} from "./LevelPriceList";

interface Props {
  col: number
}

export const LevelPrice = ({col}: Props) => {

  const colClass = `col-${col}`
    return (
        <div className={`level-price ${colClass} text-center`}>
            <h1 className="mb-5">
                LEVEL PRICES
            </h1>
            <LevelPriceList/>
        </div>
    );
};
