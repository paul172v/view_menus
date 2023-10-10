import React from "react";

import classes from "./SectionBorderWrapper.module.scss";

import MenuItem from "../menu-item/MenuItem";

const SectionBorderWrapper = (props) => {
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
          <MenuItem
            key={el.name}
            name={el.name}
            details={el.details}
            price={el.price}
            dietary={el.dietary}
            add={el.add}
            scoops={el.scoops}
          />
        );
      })}
      {props.subMenuHeading === "Sharer" && props.subMenuArray.length > 0 && (
        <React.Fragment>
          <div className={classes["u-gap"]}></div>
          <h2 className={classes["sub-heading"]}>Sharer</h2>
          {props.subMenuArray.map((el) => {
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
              />
            );
          })}
        </React.Fragment>
      )}

      {props.subMenuHeading === "Ice Cream" && (
        <div className={classes["u-bold"]}>
          <p>Ask your server for available flavours</p>
          <p>Dairy free vanilla ice cream available</p>
        </div>
      )}
    </div>
  );
};

export default SectionBorderWrapper;
