// Action Value
const ADD = "ADD";
const DELETE = "DELETE";
const CHANGE = "CHANGE";

// Action Creator
export const addToDo = (payload) => {
  return {
    type: ADD,
    payload,
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const changeToDo = (payload) => {
  return {
    type: CHANGE,
    payload,
  };
};

// Initial State
const initialState = [
  {
    id: 0,
    title: "저녁 먹기",
    body: "뇸뇸",
    isDone: false,
  },
  {
    id: 1,
    title: "리덕스 공부하기",
    body: "투두리스트 만들기",
    isDone: true,
  },
];

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const id = Date.now();
      return [
        ...state,
        {
          id: id,
          title: action.payload[0],
          body: action.payload[1],
          isDone: false,
        },
      ];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case CHANGE:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

    default:
      return state;
  }
};

// export default reducer
export default todos;
