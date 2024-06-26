import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setQuestions } from "./store/reducers/reducers";
import { Questions } from "./components/questions";
import { Result } from "./components/result";
const questions = [
  // Define your questions here with a question property, options array, and answer property for the correct answer
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    answer: "Paris",
  },
  // Add more questions here
  {
    question: "Who is the Father of Nation for India?",
    options: ["Nehru", "M K Gandhi", "Adolf Hitler"],
    answer: "M K Gandhi",
  },
];
function App() {
  const dispatch = useDispatch();
  const currentQuestionIndex = useSelector((state) => {
    return state.quizReducer.currentQuestionIndex;
  });
  const questionData = useSelector((state) => {
    return state.quizReducer.questions;
  });

  useEffect(() => {
    dispatch(setQuestions(questions));
  }, []);

  if (currentQuestionIndex == questions.length) {
    return <Result />;
  }
  return <Questions />;
}

export default App;
