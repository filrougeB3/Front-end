import React, { Suspense } from "react";
import CreateQuizQuestion from "./QuestionsForm";


export default function QuizQuestion() {
  return (
      <Suspense fallback={<p>Chargement du formulaire...</p>}>
        <CreateQuizQuestion />
      </Suspense>
  );
}