import React from "react";

import classes from "./SectionWrapper.module.scss";

import MenuItem from "../menu-item/MenuItem";

const SectionWrapper = (props) => {
  return (
    <div className={classes["section-wrapper"]}>
      <div className={classes["u-gap-small"]}></div>
      <h2 className={classes["sub-heading"]}>{props.heading}</h2>
      {props.menuArray.map((el) => {
        if (el.dietary === undefined) {
          el.dietary = "";
        } else {
          el.dietary = `${el.dietary}`;
        }

        return (
          <MenuItem
            key={el.name}
            name={el.name}
            details={el.details}
            price={el.price}
            dietary={el.dietary}
            add={el.add}
          />
        );
      })}
    </div>
  );
};

export default SectionWrapper;
