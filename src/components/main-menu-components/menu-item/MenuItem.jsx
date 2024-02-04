import React from "react";
import classes from "./MenuItem.module.scss";

const MenuItem = (props) => {
  const dietaryText = props.dietary ? `(${props.dietary})` : "";
  const priceText = props.price !== undefined ? props.price.toFixed(2) : "";

  const renderAddText = () => {
    if (
      props.add &&
      props.add[0] !== undefined &&
      props.add[0].name.length > 0 &&
      props.add[0].price !== null
    ) {
      return `Add: ${props.add[0].name} - ${props.add[0].price.toFixed(2)} / ${
        props.add[1].name
      } - ${props.add[1].price.toFixed(2)}`;
    }
    return "";
  };

  const renderScoopsText = () => {
    if (props.scoops && props.scoops.length > 0) {
      return `${
        props.scoops[0].amount
      } Scoops - ${props.scoops[0].price.toFixed(2)} / ${
        props.scoops[1].amount
      } Scoops - ${props.scoops[1].amount.toFixed(2)}`;
    }
    return "";
  };

  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["u-row"]}>
        <h3 className={classes["name"]}>
          {props.name} <span className={classes["dietary"]}>{dietaryText}</span>
        </h3>
        <p className={classes["price"]}>{priceText}</p>
      </div>
      <div className={classes["u-column"]}>
        <p className={classes["details"]}>{props.details}</p>
        <p className={classes["add"]}>{renderAddText()}</p>
        <div className={classes["scoops"]}>
          <p className={classes["add"]}>{renderScoopsText()}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
