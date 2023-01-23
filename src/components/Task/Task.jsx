import styles from './Task.module.scss'
import {useDispatch, useSelector} from "react-redux";
import React from "react";
import {changeTaskText} from "../../redux/cardSlice";

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



	return (
		<>
			<input
				className={styles.task}
				type="text"
				placeholder={'Enter a title for this card...'}
				value={props.taskText}
				ref={myRef}
				onChange={changeText}
			/>
		</>
	)
}

export default Task;