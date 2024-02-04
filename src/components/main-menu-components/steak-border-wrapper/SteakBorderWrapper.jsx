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
          />
        );
      })}
      <div className={classes["sides-wrapper"]}>
        {props.steakSides.map((el) => {
          return (
            <div key={el.name}>
              <p className={classes["add"]}>
                Add {el.name}{" "}
                {el.dietary.length > 0 && (
                  <span className={classes["orange"]}>({el.dietary})</span>
                )}{" "}
                - {el.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SteakBorderWrapper;
