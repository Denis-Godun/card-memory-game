
import { cardConvert, gameLevels } from '../mocks';
import s from "./GameGrid.module.css"

const GameGrid = () => {
    return (
        <div className={s.game}>
            {gameLevels.map((level, levelIndex) => (
                <div key={levelIndex} className={s.level}>
                    {level.cells.map((row, rowIndex) => (
                        <div key={rowIndex} className={s.row}>
                            {row.map((cell, cellIndex) => (
                                <div key={cellIndex} className={s.cell}>
                                    {cardConvert(cell.icon)}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default GameGrid


