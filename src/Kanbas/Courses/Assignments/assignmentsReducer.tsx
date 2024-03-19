import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
  assignment: {
    title: "New assignment",
    description: "New Description",
    points: 100,
    dueDate: "2024-10-10",
    availableFromDate: "2024-10-10",
    availableUntilDate: "2024-10-10",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [
        {
          ...action.payload,
          _id: new Date().getTime().toString(),
        },
        ...state.assignments,
      ];
    },
    updateAssignment: (state, action) => {
        state.assignments = state.assignments.map((a) => {
          return a._id === action.payload._id ? action.payload : a;
        });
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },
    selectAssignment: (state, action) => {
      state.assignment = action.payload;
    },
  },
});

export const {
  addAssignment,
  updateAssignment,
  selectAssignment,
  deleteAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;