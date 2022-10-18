// Libraries
import React from "react"
// App components
import List from "../List/List.jsx"
// Component styles
import style from "./Lists.module.scss"

const Lists = () => {
    return (    
        <div className={style.lists}>
            <List list_title='В планах'/>
            <List list_title='В работе'/>
            <List list_title='Завершено'/>
        </div>
    )
}

export default Lists;