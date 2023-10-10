import React from "react";

import classes from "./SecondaryColorWrapper.module.scss";

import SecondaryColorItem from "../secondary-color-item/SecondaryColorItem";

const SecondaryColorWrapper = (props) => {
  return (
    <div className={classes["box-wrapper"]}>
      <h2 className={classes.heading}>{props.heading}</h2>
      <p className={classes.tagline}>{props.tagline}</p>

      {props.menuArray.map((el) => {
        if (el.dietary === undefined) {
          el.dietary = "";
        } else {
          el.dietary = `${el.dietary}`;
        }

        return (
          <SecondaryColorItem
            key={el.name}
            name={el.name}
            details={el.details}
            price={el.price}
            dietary={el.dietary}
          />
        );
      })}
    </div>
  );
};

export default SecondaryColorWrapper;
