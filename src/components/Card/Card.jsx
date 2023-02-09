import styles from './Card.module.scss'
import Task from '../Task/Task'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { addTask, changeTitleText, deleteCard, setCurrentCard, setCardsOrders } from '../../redux/cardSlice.ts'

const Card = (props) => {
  const dispatch = useDispatch()

  const tasks = props.cardData.tasks.map((task) => {
    return (
      <Task
        taskText={task.text}
        taskId={task.id}
        cardId={props.cardData.id}
      />
    )
  })

  const myRef = React.createRef()

  // Печать текста заголовка карточки
  const changeText = () => {
    dispatch(
      changeTitleText({
        text: myRef.current.value,
        cardId: props.cardData.id,
      }),
    )
  }

  const addNewTask = () => {
    dispatch(
      addTask({
        cardId: props.cardData.id,
      }),
    )
  }

  const deleteMyCard = () => {
    dispatch(
      deleteCard({
        cardId: props.cardData.id,
      }),
    )
  }

  // Взяли карточку
  function dragStartHandler(e, cardData) {
    // console.log('drag start', cardData)
    dispatch(setCurrentCard(cardData))
  }

  // Вышли за пределы другой карточки
  function dragLeaveHandler(e) {}

  // Отпустили перемещение
  function dragEndHandler(e) {}

  // Находимся над каким то другим объектом
  function dragOverHandler(e) {
    e.preventDefault()
  }

  // Отпустили карточку
  function dragDropHandler(e, droppedCardData) {
    // console.log(droppedCardData)
    dispatch(setCardsOrders(droppedCardData))
    e.preventDefault()
  }

  return (
    <>
      <div
        className={styles.card}
        draggable={true}
        onDragStart={(e) => dragStartHandler(e, props.cardData)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dragDropHandler(e, props.cardData)}
      >
        <div className={styles.cardHeader}>
          <input
            className={styles.cardTitle}
            type='text'
            ref={myRef}
            value={props.cardData.title}
            placeholder={'Enter list title...'}
            onChange={changeText}
          />
          <a href="#" onClick={deleteMyCard} className={styles.close}></a>
        </div>
        <div className={styles.tasks}>{tasks}</div>
        <button
          onClick={addNewTask}
          className={styles.addCardBtn}
        >
          + Add a card
        </button>
      </div>
    </>
  )
}

export default Card
