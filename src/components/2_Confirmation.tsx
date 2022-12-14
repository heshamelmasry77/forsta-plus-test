import React from "react";
import { Notification, NotificationProps } from "./1_Notification";

/*
  Now build on the Notification component by creating a Confirmation component. 
  This Confirmation component should return a Notification with two additional buttons
  to get the user's response accept and decline.

  When accept or decline are clicked, the Confirmation should no longer render. 
  Instead it should render null.

  PS: The buttons should be rendered by the Confirmation component, 
  not the Notification component (think React composition).
 */

type ConfirmationProps = NotificationProps & {
  accept: () => void;
  decline: () => void;
};

export function Confirmation({
  message,
  type = "message",
  accept,
  decline
}: ConfirmationProps) {
  return (
      <div className="flex bg-gray-200 rounded gap-4 p-4">
        <button className="capitalize hover:underline" onClick={() => accept()}>accept</button>
        <button className="capitalize hover:underline" onClick={() => decline()}>decline</button>
      </div>
  )
  // return <Notification type={type} message={message}></Notification>;
}
