import React from "react";
import { Confirmation } from "./2_Confirmation";

/*
  The Question component should render the question, and a "Show answer" button.

  When clicked, the Show Answer button should result in the Confirmation being rendered,
  which should ask the user if they want to reveal the answer.

  The answer should only be revealed if "accept" is clicked.
  If "decline" is clicked, the Question component should go back to the initial state.
*/

interface Props {
  question: string;
  answer: string;
}

export function Question({ question, answer }: Props) {
  console.log("question ",question);
  console.log("answer", answer);
  return (
      <section className="section">
          <h3>{question}</h3>
          <p>{answer}</p>
      </section>
  );
}
