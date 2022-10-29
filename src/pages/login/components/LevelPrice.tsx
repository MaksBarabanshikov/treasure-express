import {LevelPriceList} from "./LevelPriceList";

interface Props {
  col: number,
  className?: string,
  titleEl?: string,
}

export const LevelPrice = ({ titleEl, col, className }: Props) => {

  const colClass = `col-${col}`

  const divClass = `level-price ${colClass} ${className} text-center`

  const mainPageClass = `level-price ${colClass} ${className} text-center main-page`

  if (titleEl) {
    return (
      <div className={divClass}>
        <h1 className="mb-5">
          { titleEl }
        </h1>
        <LevelPriceList/>
      </div>
    );
  }
  return (
    <div className={mainPageClass}>
      <LevelPriceList/>
    </div>
  )
};
