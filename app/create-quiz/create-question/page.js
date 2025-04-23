"use client";

import { useState } from "react";
import NavBar from "@/components/asidemenu";
import Image from "next/image";

export default function CreateQuizQuestion() {
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      answers: ["", ""],
      correctAnswer: "",
    },
  ]);

  const handleAddAnswer = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.push("");
    setQuestions(updatedQuestions);
  };

  const handleRemoveAnswer = (questionIndex, answerIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", answers: ["", "", ""], correctAnswer: "" },
    ]);
  };

  const handleRemoveQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(questionIndex, 1);
    setQuestions(updatedQuestions);
  };

  const handleInputChange = (questionIndex, field, value) => {
    const updatedQuestions = [...questions];
    if (field === "questionText") {
      updatedQuestions[questionIndex].questionText = value;
    } else if (field === "correctAnswer") {
      updatedQuestions[questionIndex].correctAnswer = value;
    }
    setQuestions(updatedQuestions);
  };

  const handleAnswerChange = (questionIndex, answerIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].answers[answerIndex] = value;
    setQuestions(updatedQuestions);
  };

  return (
    <div className="container">
      <NavBar />
      <div className="content">
        <div className="logo">
          <Image
            src="/images/logo_noledge.png"
            alt="A ledge"
            width={300}
            height={300}
          />
        </div>
        <div className="create-quiz-form">
        <h1>Créer les questions</h1>
        <form className="question-form">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-block">
              <label htmlFor={`question-text-${questionIndex}`}>
                Titre de la question:
              </label>
              <input
                type="text"
                id={`question-text-${questionIndex}`}
                name={`question-text-${questionIndex}`}
                value={question.questionText}
                onChange={(e) =>
                  handleInputChange(
                    questionIndex,
                    "questionText",
                    e.target.value
                  )
                }
                required
              />

              {question.answers.map((answer, answerIndex) => (
                <div key={answerIndex}>
                  <label htmlFor={`answer-${questionIndex}-${answerIndex}`}>
                    Réponse {answerIndex + 1}:
                  </label>
                  <input
                    type="text"
                    id={`answer-${questionIndex}-${answerIndex}`}
                    name={`answer-${questionIndex}-${answerIndex}`}
                    value={answer}
                    onChange={(e) =>
                      handleAnswerChange(
                        questionIndex,
                        answerIndex,
                        e.target.value
                      )
                    }
                    required
                  />
                  <button
                    type="button"
                    onClick={() =>
                      handleRemoveAnswer(questionIndex, answerIndex)
                    }
                  >
                    Supprimer cette réponse
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => handleAddAnswer(questionIndex)}
              >
                Ajouter une autre réponse
              </button>

              <label htmlFor={`correct-answer-${questionIndex}`}>
                Réponse correcte:
              </label>
              <select
                id={`correct-answer-${questionIndex}`}
                name={`correct-answer-${questionIndex}`}
                value={question.correctAnswer}
                onChange={(e) =>
                  handleInputChange(
                    questionIndex,
                    "correctAnswer",
                    e.target.value
                  )
                }
                required
              >
                <option value="">Sélectionner une réponse correcte</option>
                {question.answers.map((_, answerIndex) => (
                  <option key={answerIndex} value={answerIndex + 1}>
                    Réponse {answerIndex + 1}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => handleRemoveQuestion(questionIndex)}
              >
                Supprimer cette question
              </button>
            </div>
          ))}

          <button type="button" onClick={handleAddQuestion}>
            Ajouter une autre question
          </button>

          <button type="submit">
            <a href="/">Finaliser la création du quiz</a>
          </button>
        </form>
        </div>
      </div>
    </div>
  );
}
