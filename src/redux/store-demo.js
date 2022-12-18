let initialState = {
  Cards: [
    { id: 0, title: "В планах", tasksId: [0, 1] },
    { id: 1, title: "В работе", tasksId: [2, 3] },
    { id: 2, title: "Завершено", tasksId: [4, 5] },
  ],

  Tasks: [
    { id: 0, text: "Покормить кота" },
    { id: 1, text: "Сходить в магазин" },
    { id: 2, text: "Убраться дома" },
    { id: 3, text: "Постирать одежду" },
    { id: 4, text: "Приготовить ужин" },
    { id: 5, text: "Почистить компьютер" },
  ],
};

let initialState2 = {
  Cards: [
    {
      id: 0,
      title: "В планах",
      tasks: [
        { id: 0, text: "Покормить кота" },
        { id: 1, text: "Сходить в магазин" },
      ],
    },

    {
      id: 1,
      title: "В работе",
      tasks: [
        { id: 2, text: "Убраться дома" },
        { id: 3, text: "Постирать одежду" },
      ],
    },

    {
      id: 2,
      title: "Завершено",
      tasks: [
        { id: 4, text: "Приготовить ужин" },
        { id: 5, text: "Почистить компьютер" },
      ],
    },
  ],
};
