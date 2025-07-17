// const ADD_TASK = "todo/add";
// const DELETE_TASK = "todo/delete";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
        // what is state here is if we console.log(state) it will show the initialState
      state.task.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const index = state.task.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.task[index] = { ...state.task[index], ...action.payload };
      }
    },
  },
});
console.log("taskSlice", taskSlice);

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;

//* creating the reducer
// const taskReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_TASK":
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };
//     case "DELETE_TASK":
//       return {
//         ...state,
//         task: state.task.filter((task) => task.id !== action.payload),
//       };

//     case "UPDATE_TASK":
//       return {
//         ...state,
//         task: state.task.map((task) =>
//           task.id === action.payload.id ? { ...task, ...action.payload } : task
//         ),
//       };
//     default:
//       return state;
//   }
// };
