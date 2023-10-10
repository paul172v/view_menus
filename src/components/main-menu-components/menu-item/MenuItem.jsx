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
            props.add.length > 0 &&
            `Add: ${props.add[0].name} - ${props.add[0].price.toFixed(2)} / ${
              props.add[1].name
            } - ${props.add[1].price.toFixed(2)}`}
        </p>
        <div className={classes.scoops}>
          <p className={classes.add}>
            {props.scoops &&
              props.scoops.length > 0 &&
              `${
                props.scoops[0].amount
              } Scoops - ${props.scoops[0].price.toFixed(2)} / ${
                props.scoops[1].amount
              } Scoops - ${props.scoops[1].amount.toFixed(2)}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
