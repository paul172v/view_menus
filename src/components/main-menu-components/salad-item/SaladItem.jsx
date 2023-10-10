import React from "react";

import classes from "./SaladItem.module.scss";

const SaladItem = (props) => {
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <p className={classes.topping}>
          {props.name}
          {props.dietary === "" ? (
            ""
          ) : (
            <span className={classes.dietary}> ({props.dietary})</span>
          )}
        </p>
        <p className={classes.price}>{props.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default SaladItem;
