import { createSlice } from '@reduxjs/toolkit'

let id = 0
const getId = () => (id += 1)

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    currentCard: null,
    Cards: [
      {
        id: getId(),
        order: 1,
        title: 'В планах',
        tasks: [
          {
            id: getId(),
            text: 'Покормить кота',
          },
          {
            id: getId(),
            text: 'Сходить в магазин',
          },
        ],
      },

      {
        id: getId(),
        order: 2,
        title: 'В работе',
        tasks: [
          {
            id: getId(),
            text: 'Убраться дома',
          },
          {
            id: getId(),
            text: 'Постирать одежду',
          },
        ],
      },

      {
        id: getId(),
        order: 3,
        title: 'Завершено',
        tasks: [
          {
            id: getId(),
            text: 'Приготовить ужин',
          },
          {
            id: getId(),
            text: 'Почистить компьютер',
          },
        ],
      },
    ],
  },
  reducers: {
    changeTitleText(state, action) {
      state.Cards.forEach((card) => {
        if (card.id == action.payload.cardId) {
          card.title = action.payload.text
        }
      })
    },

    changeTaskText(state, action) {
      state.Cards.forEach((card) => {
        if (card.id == action.payload.cardId) {
          card.tasks.forEach((task) => {
            if (task.id == action.payload.taskId) {
              task.text = action.payload.text
            }
          })
        }
      })
    },

    addCard(state, action) {
      state.Cards.push({
        id: getId(),
        order: 4,
        title: '',
        tasks: [],
      })
    },

    deleteCard(state, action) {
      state.Cards = state.Cards.filter((card) => {
        return card.id != action.payload.cardId
      })
    },

    deleteTask(state, action) {
      state.Cards.forEach((card) => {
        if (card.id == action.payload.cardId) {
          card.tasks = card.tasks.filter((task) => {
            return task.id != action.payload.taskId
          })
        }
      })
    },

    addTask(state, action) {
      const newTask = {
        id: getId(),
        text: '',
      }

      state.Cards.forEach((card) => {
        if (card.id == action.payload.cardId) {
          card.tasks.push(newTask)
        }
      })
    },
  },
})

export default cardSlice.reducer
export const { addCard, addTask, deleteTask, changeTitleText, changeTaskText, deleteCard } = cardSlice.actions
