import {createAction, createReducer} from "@reduxjs/toolkit";

export const addCardAC = createAction("ADD_CARD")

let initialState = {
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
};

const cardReducer = createReducer(initialState, {
	[addCardAC]: function (state) {
		state.Cards.push({
			id: 0,
			title: "В планах",
			tasks: [
				{id: 0, text: "Покормить кота"},
				{id: 1, text: "Сходить в магазин"},
			],
		})
	}
})

export default cardReducer;
