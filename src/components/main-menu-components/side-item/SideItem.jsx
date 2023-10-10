import React from "react";

import classes from "./SideItem.module.scss";

const SideItem = (props) => {
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <p className={classes.name}>{props.name}</p>
        {props.dietary === "" ? (
          ""
        ) : (
          <span className={classes.dietary}>({props.dietary})</span>
        )}
      </div>

      <div className={classes.price}>{props.price.toFixed(2)}</div>
    </div>
  );
};

export default SideItem;
