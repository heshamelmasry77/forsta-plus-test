import React from "react";

import { Question as QuestionComponent } from "./3_Question";

interface Question {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  questions: Question[];
}

export function QuestionList({ questions }: Props) {
  console.log("questions: ",questions);
  return (
    <div className="question-list">
      {questions.map(({id, question, answer}) => {
        return (
            <QuestionComponent
                key={id}
                question={question}
                answer={answer}
            />
        );
      })}
    </div>
  );
}
