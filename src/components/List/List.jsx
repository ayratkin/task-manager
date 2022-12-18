// Libraries
import React from "react"
// App components
import Cards from "../Cards/Cards.jsx"
// Component styles
import style from "./List.module.scss"

const List = (props) => {
    return (    
        <div className={style.list}>
            <h3 className={style.list_title}>
                {props.list_title}
            </h3>
            <Cards />
            
            <form className={style.add_card_btn}>
                <input type="text" />
                <button> add</button>
            </form>
        </div>
    )
}

export default List;