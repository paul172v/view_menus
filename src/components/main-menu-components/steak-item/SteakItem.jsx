import React from "react";

import classes from "./SteakItem.module.scss";

const SteakItem = (props) => {
  return (
    <div className={classes["item-wrapper"]}>
      <p className={classes.details}>{props.details}</p>
      <div className={classes["u-row"]}>
        <div className={classes["name-wrapper"]}>
          <h3 className={classes.name}>
            {props.name}{" "}
            {props.dietary !== undefined ? (
              <span className={classes.dietary}>({props.dietary})</span>
            ) : (
              ""
            )}
          </h3>
        </div>

        <p className={classes.price}>{props.price}</p>
      </div>
    </div>
  );
};

export default SteakItem;
