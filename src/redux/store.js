import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cardSlice from "./cardSlice.ts";

let store = configureStore({
	reducer: {
		cards: cardSlice
	},
})

export default store;