import React from "react";

import classes from "./WineItem.module.scss";

const WineItem = (props) => {
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <h3 className={classes["name"]}>{props.name}</h3>
        {props.centiliter && (
          <p className={classes["centiliter"]}>{props.centiliter}CL</p>
        )}
      </div>
      <p className={classes["country"]}>{props.country}</p>
      <div className={classes["u-row"]}>
        {props.bottle && (
          <div className={classes["u-row"]}>
            <p className={classes["bottle"]}>Bottle </p>
            <p className={classes["u-bold"]}>{props.bottle.toFixed(2)}</p>
          </div>
        )}
        {props.ml250 && (
          <div className={classes["u-row"]}>
            <p className={classes["ml250"]}>250ml </p>
            <p className={classes["u-bold"]}>{props.ml250.toFixed(2)}</p>
          </div>
        )}
        {props.ml175 && (
          <div className={classes["u-row"]}>
            <p className={classes["ml175"]}>175ml </p>
            <p className={classes["u-bold"]}>{props.ml175.toFixed(2)}</p>
          </div>
        )}
      </div>
      <p className={classes["details"]}>{props.details}</p>
    </div>
  );
};

export default WineItem;
