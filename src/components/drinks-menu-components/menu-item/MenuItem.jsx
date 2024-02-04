import React from "react";

import classes from "./MenuItem.module.scss";

const MenuItem = (props) => {
  return (
    <div className={classes["item-wrapper"]}>
      <div className={classes["item-row"]}>
        <div className={classes["name-wrapper"]}>
          <h3 className={classes["name"]}>{props.name.toUpperCase()}</h3>
          {props.percentage && (
            <p className={classes["percentage"]}>{props.percentage}%</p>
          )}
        </div>

        {props.pint &&
          (props.pint !== "pint" ? (
            <p className={classes["price-1"]}>{props.pint.toFixed(2)}</p>
          ) : (
            <p className={classes["price-1-heading"]}>{props.pint}</p>
          ))}

        {props.halfPint &&
          (props.halfPint !== "½ pint" ? (
            <p className={classes["price-2"]}>{props.halfPint.toFixed(2)}</p>
          ) : (
            <p className={classes["price-2-heading"]}>{props.halfPint}</p>
          ))}

        {props.oz10 &&
          (props.oz10 !== "10oz" ? (
            <p className={classes["price-1"]}>{props.oz10.toFixed(2)}</p>
          ) : (
            <p className={classes["price-1-heading"]}>{props.oz10}</p>
          ))}
        {props.oz16 &&
          (props.oz16 !== "16oz" ? (
            <p className={classes["price-2"]}>{props.oz16.toFixed(2)}</p>
          ) : (
            <p className={classes["price-2-heading"]}>{props.oz16}</p>
          ))}

        {props.price && props.price === "330ml" && (
          <p className={classes["price-heading"]}>{props.price}</p>
        )}

        {props.price && props.price === "275ml" && (
          <p className={classes["price-heading"]}>{props.price}</p>
        )}

        {props.price && props.price === "250ml" && (
          <p className={classes["price-heading"]}>{props.price}</p>
        )}

        {props.price &&
          props.price !== "330ml" &&
          props.price !== "275ml" &&
          props.price !== "250ml" && (
            <p className={classes["price"]}>{props.price.toFixed(2)}</p>
          )}
      </div>

      <p className={classes["details"]}>{props.details}</p>
    </div>
  );
};

export default MenuItem;
