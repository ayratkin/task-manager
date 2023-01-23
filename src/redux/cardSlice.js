import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";

const cardSlice = createSlice({
	name: "card",
	initialState: {
		Cards: [
			{
				id: 0,
				title: "В планах",
				tasks: [
					{id: 0, text: "Покормить кота"},
					{id: 1, text: "Сходить в магазин"},
				],
			},

			{
				id: 1,
				title: "В работе",
				tasks: [
					{id: 2, text: "Убраться дома"},
					{id: 3, text: "Постирать одежду"},
				],
			},

			{
				id: 2,
				title: "Завершено",
				tasks: [
					{id: 4, text: "Приготовить ужин"},
					{id: 5, text: "Почистить компьютер"},
				],
			},
		]
	},
	reducers: {

		changeTitleText(state, action) {
			const cardId = action.payload.cardId;
			state.Cards[cardId].title = action.payload.text
		},

		changeTaskText(state, action) {
			const taskId = action.payload.taskId;
			const cardId = action.payload.cardId;

			state.Cards[cardId].tasks.forEach((task) => {
				if (task.id === taskId) {
					task.text = action.payload.text
				}
			})
		},

		addCard(state, action) {
			state.Cards.push({
				id: action.payload.cardId,
				title: '',
				tasks: [],
			})
		},

		addTask(state, action) {
			const newTask = {
				id: action.payload.taskId,
				text: '',
			}

			state.Cards[action.payload.cardId].tasks.push(newTask)
		}
	}
})


export default cardSlice.reducer;
export const {addCard, addTask, changeTitleText, changeTaskText} = cardSlice.actions