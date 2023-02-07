import styles from './Card.module.scss'
import Task from '../Task/Task'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react'
import { addTask, changeTitleText, deleteCard } from '../../redux/cardSlice.ts'

const Card = (props) => {
  const dispatch = useDispatch()

  const tasks = props.tasks.map((task) => {
    return (
      <Task
        taskText={task.text}
        taskId={task.id}
        cardId={props.cardID}
      />
    )
  })

  const myRef = React.createRef()

  // Печать текста заголовка карточки
  const changeText = () => {
    dispatch(
      changeTitleText({
        text: myRef.current.value,
        cardId: props.cardID,
      }),
    )
  }

  const addNewTask = () => {
    dispatch(
      addTask({
        cardId: props.cardID,
      }),
    )
  }

  const deleteMyCard = () => {
    dispatch(
      deleteCard({
        cardId: props.cardID,
      }),
    )
  }

  // Взяли карточку
  function dragStartHandler(e, cardTitle) {
    console.log('drag start', cardTitle)
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
  function dragDropHandler(e, cardTitle) {
    e.preventDefault()
    console.log('drag drop', cardTitle)
  }

  return (
    <>
      <div
        className={styles.card}
        draggable={true}
        onDragStart={(e) => dragStartHandler(e, props.cardTitle)}
        onDragLeave={(e) => dragLeaveHandler(e)}
        onDragEnd={(e) => dragEndHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        onDrop={(e) => dragDropHandler(e, props.cardTitle)}
      >
        <div className={styles.cardHeader}>
          <input
            className={styles.cardTitle}
            type='text'
            ref={myRef}
            value={props.cardTitle}
            placeholder={'Enter list title...'}
            onChange={changeText}
          />
          <button onClick={deleteMyCard}>-</button>
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
