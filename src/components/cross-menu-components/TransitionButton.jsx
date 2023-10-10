import React from "react";

import classes from "./TransitionButton.module.scss";

const TransitionButton = (props) => {
  return <button onClick={props.onChangePage}>{props.name}</button>;
};

export default TransitionButton;
