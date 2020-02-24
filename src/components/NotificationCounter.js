import React from "react";

const NotificationCounter = props => {
  return (
    <div className={`notification-counter ${props.color}`}>{props.value}</div>
  );
};

export default NotificationCounter;
