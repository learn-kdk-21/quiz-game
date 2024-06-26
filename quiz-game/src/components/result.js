import React from "react";
import { useSelector } from "react-redux";

export const Result = () => {
  const questions = useSelector((state) => {
    return state.quizReducer.questions;
  });
  //   const userAnswers = useSelector((state) => {
  //     return state.quizReducer.userAnswers;
  //   });
  const score = useSelector((state) => {
    return state.quizReducer.score;
  });

  return (
    <div>
      <h2>Results</h2>
      <p>
        You answered {score} question out of {questions.length} questions
        correctly
      </p>
      <p>Your Final Score: {score}</p>
    </div>
  );
};
