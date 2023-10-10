import React from "react";

import classes from "./SidesWrapper.module.scss";

import SideItem from "../side-item/SideItem";

const SidesWrapper = (props) => {
  return (
    <div className={classes["section-wrapper"]}>
      <h2 className={classes["sub-heading__sides"]}>{props.heading}</h2>
      {props.menuArray.map((el) => {
        if (el.dietary === undefined) {
          el.dietary = "";
        } else {
          el.dietary = `${el.dietary}`;
        }

        return (
          <SideItem
            key={el.name}
            name={el.name}
            dietary={el.dietary}
            price={el.price}
          />
        );
      })}
    </div>
  );
};

export default SidesWrapper;
