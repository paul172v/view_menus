import React from "react";

import classes from "./SteakBorderWrapper.module.scss";

import SteakItem from "../steak-item/SteakItem";

const SteakBorderWrapper = (props) => {
  return (
    <div className={classes["section-wrapper-border"]}>
      <h2 className={classes["sub-heading"]}>{props.heading}</h2>
      {props.menuArray.map((el) => {
        if (el.dietary === undefined) {
          el.dietary = "";
        } else {
          el.dietary = `${el.dietary}`;
        }

        return (
          <SteakItem
            key={el.name}
            details={el.details}
            name={el.name}
            dietary={el.dietary}
            price={el.price}
            add={el.add}
          />
        );
      })}
    </div>
  );
};

export default SteakBorderWrapper;
