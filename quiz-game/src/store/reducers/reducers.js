import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  questions: [],
  currentQuestionIndex: 0,
  userAnswers: [],
  score: 0,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    answerQuestions: (state, action) => {
      state.userAnswers.push(action.payload);
      state.currentQuestionIndex++;
    },
    updateScore: (state, action) => {
      state.score += action.payload;
    },
  },
});

export default quizSlice.reducer;
export const { setQuestions, answerQuestions, updateScore } = quizSlice.actions;
