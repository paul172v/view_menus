import React from "react";

import classes from "./SaladItem.module.scss";

const SaladItem = (props) => {
  const dietaryText = props.dietary ? ` (${props.dietary})` : "";

  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <p className={classes["topping"]}>
          {props.name}
          <span className={classes["dietary"]}>{dietaryText}</span>
        </p>
        <p className={classes["price"]}>{props.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SaladItem;
