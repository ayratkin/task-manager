import styles from './Task.module.scss'
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import trash from '../../images/trash.svg'
import {changeTaskText, deleteTask} from "../../redux/cardSlice.ts";

const Task = (props) => {

	const dispatch = useDispatch();

	const myRef = React.createRef()

	// Печать текста заголовка карточки
	const changeText = () => {
		dispatch(changeTaskText({
			text: myRef.current.value,
			taskId: props.taskId,
			cardId: props.cardId,
		}))
	}

	const deleteMyTask = () => {
		dispatch(deleteTask({
			taskId: props.taskId,
			cardId: props.cardId,
		}))
	}

	return (
		<>
		<div className={styles.task}>
			<input
					className={styles.taskInput}
					type="text"
					placeholder={'Enter a title for this card...'}
					value={props.taskText}
					ref={myRef}
					onChange={changeText}
			/>
			<button
				className={styles.deleteTaskBtn}
				onClick={deleteMyTask}>
				<img
					src={trash}
					alt=""
					className={styles.trashImg}
				/>
			</button>
		</div>
		</>
	)
}

export default Task;