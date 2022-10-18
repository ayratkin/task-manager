// Libraries
import React from "react"
// App components
import Lists from "../Lists/Lists.jsx";
// Component styles
import style from "./Board.module.scss"

const Board = () => {
    return (    
        <div className={style.board}>
            Доска
            <Lists/>
        </div>
    )
}

export default Board;