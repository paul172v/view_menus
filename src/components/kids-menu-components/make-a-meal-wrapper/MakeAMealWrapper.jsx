import React, { useState } from "react";

import classes from "./MakeAMealWrapper.module.scss";

import PrimaryColorItem from "../primary-color-item/PrimaryColorItem";

const PrimaryColorWrapper = (props) => {
  console.log(props.menuArray);
  return (
    <div className={classes["box-wrapper"]}>
      <h2 className={classes.heading}>
        MAKE-A-MEAL - <span className={classes.price}>4.95</span>
      </h2>
      <p className={classes.tagline}>Get creative with all your favourites</p>
      <p className={classes["sub-heading"]}>Choose a main</p>
      <div className={classes["mains-grid"]}>
        {props.mains.map((el) => {
          if (el.dietary === undefined) {
            el.dietary = "";
          } else {
            el.dietary = `${el.dietary}`;
          }

          return (
            <p className={classes["meal-item"]} key={el.name}>
              {el.name}{" "}
              {el.dietary && (
                <span className={classes.dietary}>({el.dietary})</span>
              )}
            </p>
          );
        })}
      </div>
      <p className={classes["sub-heading"]}>Add a side</p>
      <div className={classes["u-row"]}>
        {props.sides.map((el) => {
          if (el.dietary === undefined) {
            el.dietary = "";
          } else {
            el.dietary = `${el.dietary}`;
          }

          return (
            <p className={classes["side-item"]} key={el.name}>
              {el.name}
              {el.dietary && (
                <span className={classes.dietary}>({el.dietary})</span>
              )}
            </p>
          );
        })}
      </div>
      <p className={classes["sub-heading"]}>Add an extra</p>
      <div className={classes["u-row"]}>
        {props.extras.map((el) => {
          if (el.dietary === undefined) {
            el.dietary = "";
          } else {
            el.dietary = `${el.dietary}`;
          }

          return (
            <p className={classes["side-item"]} key={el.name}>
              {el.name}
              {el.dietary && (
                <span className={classes.dietary}>({el.dietary})</span>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default PrimaryColorWrapper;
