import { createSlice } from '@reduxjs/toolkit'

let id = 0
const getId = () => id += 1

let order = 0
const getOrder = () => order += 1

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    currentCard: null,
    boardTitle: 'Упражняня на севодня',
    Cards: [
      {
        id: getId(),
        order: getOrder(),
        title: 'Утром',
        tasks: [
          {
            id: getId(),
            text: 'Бегит',
          },
          {
            id: getId(),
            text: 'Пресс качат',
          },
        ],
      },

      {
        id: getId(),
        order: getOrder(),
        title: 'Днем',
        tasks: [
          {
            id: getId(),
            text: 'Турнек',
          },
          {
            id: getId(),
            text: 'Пресс качат',
          },
        ],
      },

      {
        id: getId(),
        order: getOrder(),
        title: 'Вечером',
        tasks: [
          {
            id: getId(),
            text: 'Турнек',
          },
          {
            id: getId(),
            text: 'Анжуманя',
          },
        ],
      },
    ],
  },
  reducers: {
    changeBoardTitle(state, action) {
      state.boardTitle = action.payload.text
    },

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

    setCurrentCard(state, action) {
      state.currentCard = action.payload
    },

    addCard(state, action) {
      state.Cards.push({
        id: getId(),
        order: getOrder(),
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

    setCardsOrders(state, action) {
      const droppedCard = action.payload // Карточка, в которую перемещаем взятую карточку

      // Меняем местами порядковые значения взятой карточки и
      // карточки, в которую вкладываем, местами.
      state.Cards.forEach((card) => {
        if (card.id == droppedCard.id) {
          card.order = state.currentCard.order
        }

        if (card.id == state.currentCard.id) {
          card.order = droppedCard.order
        }
      })

      // Сортировка массива по возврастанию значения order: порядкового номера карточки
      state.Cards.sort(function (a, b) {
        return a.order - b.order
      })
    },
  },
})

export default cardSlice.reducer
export const {
  addCard,
  addTask,
  deleteTask,
  changeTitleText,
  changeTaskText,
  deleteCard,
  setCurrentCard,
  setCardsOrders,
  changeBoardTitle,
} = cardSlice.actions
