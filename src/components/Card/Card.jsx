// Libraries
import React from "react"
// App components

// Component styles
import style from "./Card.module.scss"

const Card = (props) => {
    return (    
        <div className={style.card}>
            <p className={style.card_text}>
                {props.card_text}
            </p>
        </div>
    )
}

export default Card;