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
  return (
      <div className="mt-6 flow-root">
        <ul role="list" className="-my-5 divide-y divide-gray-200">
          {questions.map(({id, question, answer}) => {
            return (
                <QuestionComponent
                    key={id}
                    question={question}
                    answer={answer}
                />
            );
          })}
        </ul>
      </div>
      );
}
