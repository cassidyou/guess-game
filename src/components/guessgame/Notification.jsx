import React from "react";

const Notification = ({headingText, paragraphText, status}) => {
  return (
    <div className={`notification ${status}`}>
      <h2>{headingText}</h2>
      <p>{paragraphText}</p>
    </div>
  );
};

export default Notification;
