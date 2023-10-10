import React from "react";

import classes from "./TwoPriceWrapper.module.scss";

import MenuItem from "../menu-item/MenuItem";

const TwoPriceWrapper = (props) => {
  return (
    <div className={classes["menu-wrapper"]}>
      <h2 className={classes.heading}>{props.heading}</h2>
      {props.price1 === "pint" && (
        <MenuItem key={Math.random()} name="" pint="pint" halfPint="½ pint" />
      )}
      {props.price1 === "10oz" && (
        <MenuItem key={Math.random()} name="" oz10="10oz" oz16="16oz" />
      )}
      {props.menuArr.map((el) => {
        return (
          <MenuItem
            key={el.name}
            name={el.name}
            pint={el.pint}
            halfPint={el.halfPint}
            oz10={el.oz10}
            oz16={el.oz16}
          />
        );
      })}
      {props.menuArr2 && <div className={classes.gap} />}
      {props.menuArr2 && <MenuItem key={Math.random()} name="" price="330ml" />}
      {props.menuArr2 &&
        props.menuArr2.map((el) => {
          return <MenuItem key={el.name} name={el.name} price={el.price} />;
        })}
      {props.menuArr3 && <div className={classes.gap} />}
      {props.menuArr3 && <MenuItem key={Math.random()} name="" price="275ml" />}
      {props.menuArr3 &&
        props.menuArr3.map((el) => {
          return <MenuItem key={el.name} name={el.name} price={el.price} />;
        })}
      {props.menuArr4 && <div className={classes.gap} />}
      {props.menuArr4 && <MenuItem key={Math.random()} name="" price="250ml" />}
      {props.menuArr4 &&
        props.menuArr4.map((el) => {
          return <MenuItem key={el.name} name={el.name} price={el.price} />;
        })}
    </div>
  );
};

export default TwoPriceWrapper;
