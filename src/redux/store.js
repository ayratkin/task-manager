import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cardReducer from "./cardReducer";
import cardSlice from "./cardSlice";

let store = configureStore({
	reducer: {
		cards: cardSlice
	},
})

export default store;