import React from "react";

import classes from "./GenericItemWrapper.module.scss";

import MenuItem from "../menu-item/MenuItem";

const GenericItemWrapper = (props) => {
  return (
    <div className={classes["menu-wrapper"]}>
      <div className={classes["u-row"]}>
        <h2 className={classes.heading}>{props.heading}</h2>
        {props.measure && <p className={classes.measure}>{props.measure}ml</p>}
      </div>
      {props.menuArr.map((el) => {
        return (
          <MenuItem
            key={el.name}
            name={el.name}
            price={el.price}
            percentage={el.percentage}
            details={el.details}
          />
        );
      })}
    </div>
  );
};

export default GenericItemWrapper;
