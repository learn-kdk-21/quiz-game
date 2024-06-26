import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { answerQuestions, updateScore } from "../store/reducers/reducers";

export const Questions = () => {
  const dispatch = useDispatch();
  const currentQuestion = useSelector((state) => {
    return state.quizReducer.questions[state.quizReducer.currentQuestionIndex];
  });
  const currentQuestionIndex = useSelector((state) => {
    return state.quizReducer.currentQuestionIndex;
  });
  const userAnswers = useSelector((state) => {
    return state.quizReducer.userAnswers;
  });
  const [selectedAnswer, setSelectedAnswer] = useState(
    userAnswers[currentQuestionIndex] || null
  );
  const handleAnswerOption = (option) => {
    setSelectedAnswer(option);
  };
  const handleSubmit = () => {
    if (selectedAnswer) {
      dispatch(answerQuestions(selectedAnswer));
      if (selectedAnswer == currentQuestion.answer) {
        dispatch(updateScore(1));
      }
    }
  };
  if (!currentQuestion) {
    return null;
  }

  const { question, options } = currentQuestion;
  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => {
        return (
          <button
            key={index}
            onClick={() => handleAnswerOption(option)}
            className={selectedAnswer == option ? "selected" : "unselected"}
          >
            {option}
          </button>
        );
      })}
      <div className="nextContainer">
        <button onClick={() => handleSubmit()}>Next</button>
      </div>
    </div>
  );
};
