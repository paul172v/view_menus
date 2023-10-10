import React from "react";

import classes from "./WinesWrapper.module.scss";

import WineItem from "../wine-item/WineItem";

const WinesWrapper = (props) => {
  return (
    <div className={classes["menu-wrapper"]}>
      <h2 className={classes.heading}>{props.heading}</h2>
      {props.menuArr.map((el) => {
        return (
          <WineItem
            key={el.name + el.centiliter}
            name={el.name}
            centiliter={el.centiliter}
            country={el.country}
            bottle={el.bottle}
            ml250={el.ml250}
            ml175={el.ml175}
            details={el.details}
          />
        );
      })}
    </div>
  );
};

export default WinesWrapper;
