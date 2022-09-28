import React, {useState} from "react";
import {Confirmation} from "./2_Confirmation";

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

export function Question({question, answer}: Props) {
    const [isShowAnswer, setIsShowAnswer] = useState(false);
    const [isShowConfirmation, setIsShowConfirmation] = useState(false);

    const handleClickShowConfirmation = () => {
        setIsShowConfirmation(!isShowConfirmation);
    }

    const handleAccept = () => {
        setIsShowAnswer(true);
        setIsShowConfirmation(false);
    }

    const handleDecline = () => {
        setIsShowConfirmation(false);
    }

    return (
        <>
            <li className="py-5">
                <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                    <div className="flex items-center gap-x-4">
                        <h3 className="text-sm font-semibold text-gray-800 relative">
                            <div>
                                <span className="absolute inset-0"/>
                                {question}
                            </div>
                        </h3>
                        {!isShowAnswer && <button
                            onClick={() => {
                                handleClickShowConfirmation();
                            }}
                            type="button"
                            className="w-full sm:w-auto py-2 px-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 dark:disabled:bg-indigo-800 text-white dark:disabled:text-indigo-400 text-sm font-semibold rounded-md shadow focus:outline-none hover:cursor-pointer">
                            Show Answer
                        </button>}
                    </div>
                    {isShowAnswer && <p className="mt-1 text-sm text-gray-600 line-clamp-2">{answer}</p>}
                </div>
            </li>
            {isShowConfirmation && <Confirmation
                message={"Do you want to reveal the answer"}
                accept={handleAccept}
                decline={handleDecline}/>
            }
        </>
    );
}
