import React from "react";

import classes from "./PrimaryColorItem.module.scss";

const PrimaryColorItem = (props) => {
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <h3 className={classes["name"]}>
          {props.name}
          <span className={classes["dietary"]}>
            {props.dietary && `(${props.dietary})`}
          </span>
        </h3>
        <p className={classes["price"]}>{props.price.toFixed(2)}</p>
      </div>
      <p className={classes["details"]}>{props.details}</p>
    </div>
  );
};

export default PrimaryColorItem;
