import styles from './Card.module.scss'
import Task from "../Task/Task";
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {addTask, changeTitleText} from "../../redux/cardSlice";

const Card = (props) => {

	const dispatch = useDispatch();
	const cards = useSelector((state) => state.cards.Cards);

	// Возвращает количество "тасков" (задач) в приложении.
	const incrementTaskId = () => {
		let newId = 0;
		let tasksCount = 0;

		for (let i = 0; i < cards.length; i++) {
			newId += 1;
			tasksCount += cards[i].tasks.length
		}

		return tasksCount
	}

	const tasks = props.tasks.map((task) => {
		return <Task taskText={task.text} taskId={task.id} cardId={props.cardID}/>
	})

	const myRef = React.createRef()

	// Печать текста заголовка карточки
	const changeText = () => {
		dispatch(changeTitleText({
			text: myRef.current.value,
			cardId: props.cardID,
		}))
	}

	const addNewTask = () => {
		dispatch(addTask({
			taskId: incrementTaskId(),
			cardId: props.cardID,
		}))
	}

	return (
		<>
			<div className={styles.card}>
				<input
					className={styles.cardTitle}
					type="text"
					ref={myRef}
					value={props.cardTitle}
					placeholder={'Enter list title...'}
					onChange={changeText}/>
				<div className={styles.tasks}>
					{tasks}
				</div>
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

export default Card;