import React from "react";

import classes from "./MenuItem.module.scss";

const MenuItem = (props) => {
  let dietary;

  if (props.dietary === "") {
    dietary = "";
  } else {
    dietary = `(${props.dietary})`;
  }
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <h3 className={classes.name}>
          {props.name} <span className={classes.dietary}>{dietary}</span>
        </h3>
        <p className={classes.price}>
          {props.price === undefined ? "" : props.price.toFixed(2)}
        </p>
      </div>
      <div className={classes["u-column"]}>
        <p className={classes.details}>{props.details}</p>
        <p className={classes.add}>
          {props.add &&
            `Add: ${props.add[0][0]} - ${props.add[0][1].toFixed(2)} / ${
              props.add[1][0]
            } - ${props.add[1][1].toFixed(2)}`}
        </p>
        <div className={classes.scoops}>
          <p className={classes.add}>
            {props.scoops &&
              `${props.scoops[0][0]} - ${props.scoops[0][1].toFixed(2)} / ${
                props.scoops[1][0]
              } - ${props.scoops[1][1].toFixed(2)}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
