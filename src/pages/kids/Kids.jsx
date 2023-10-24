import React, { useReducer, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { GiSquirrel } from "react-icons/gi";
import { GoSquirrel } from "react-icons/go";

import classes from "./Kids.module.scss";

import FilterToggleButtons from "../../components/cross-menu-components/FilterToggleButtons";
import PrimaryColorWrapper from "../../components/kids-menu-components/primary-color-wrapper/PrimaryColorWrapper";
import SecondaryColorWrapper from "../../components/kids-menu-components/secondary-color-wrapper/SecondaryColorWrapper";
import MakeAMealWrapper from "../../components/kids-menu-components/make-a-meal-wrapper/MakeAMealWrapper";

const initState = {
  dietaryFilter: "none",
  menusLoaded: false,
  startersArr: null,
  mainsArr: null,
  makeAMealMainsArr: null,
  makeAMealSidesArr: null,
  makeAMealExtrasArr: null,
  dessertsArr: null,
};

const reducer = (state, { type, value }) => {
  switch (type) {
    ///// toggle the dietary filters
    case "setDietaryFilter":
      return { ...state, dietaryFilter: value };

    ///// Set the menuLoaded state
    case "setMenusLoaded":
      return { ...state, menusLoaded: value };

    ///// Setup the default state
    case "setDefaultMenusState":
      return { ...state, defaultState: value };

    ///// Assign values to the main state
    case "updateStartersArr":
      return { ...state, startersArr: value };
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateMakeAMealMainsArr":
      return { ...state, makeAMealMainsArr: value };
    case "updateMakeAMealSidesArr":
      return { ...state, makeAMealSidesArr: value };
    case "updateMakeAMealExtrasArr":
      return { ...state, makeAMealExtrasArr: value };
    case "updateDessertsArr":
      return { ...state, dessertsArr: value };

    default:
      throw new Error();
  }
};

const Kids = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetch(
      "https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/kids-menu/get-every-array",
      {
        method: "GET", // Corrected here
        headers: {
          // Corrected here
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((dataObj) => {
        //handle data

        dispatch({
          type: "updateStartersArr",
          value: dataObj.payload.data.startersArr,
        });
        dispatch({
          type: "updateMainsArr",
          value: dataObj.payload.data.mainsArr,
        });

        dispatch({
          type: "updateMakeAMealMainsArr",
          value: dataObj.payload.data.makeAMealMainsArr,
        });

        dispatch({
          type: "updateMakeAMealSidesArr",
          value: dataObj.payload.data.makeAMealSidesArr,
        });

        dispatch({
          type: "updateMakeAMealExtrasArr",
          value: dataObj.payload.data.makeAMealExtrasArr,
        });

        dispatch({
          type: "updateDessertsArr",
          value: dataObj.payload.data.dessertsArr,
        });

        dispatch({
          type: "setDefaultMenusState",
          value: {
            dietaryFilter: "none",
            startersArr: dataObj.payload.data.startersArr,
            mainsArr: dataObj.payload.data.mainsArr,
            makeAMealMainsArr: dataObj.payload.data.makeAMealMainsArr,
            makeAMealSidesArr: dataObj.payload.data.makeAMealSidesArr,
            makeAMealExtrasArr: dataObj.payload.data.makeAMealExtrasArr,
            dessertsArr: dataObj.payload.data.dessertsArr,
          },
        });

        dispatch({ type: "setMenusLoaded", value: true });
      })
      .catch((error) => {
        dispatch({ type: "setMenusLoaded", value: "error" });
      });
  }, []);

  const resetStateToDefault = () => {
    dispatch({
      type: "updateStartersArr",
      value: state.defaultState.startersArr,
    });
    dispatch({
      type: "updateMainsArr",
      value: state.defaultState.mainsArr,
    });

    dispatch({
      type: "updateMakeAMealMainsArr",
      value: state.defaultState.makeAMealMainsArr,
    });

    dispatch({
      type: "updateMakeAMealSidesArr",
      value: state.defaultState.makeAMealSidesArr,
    });

    dispatch({
      type: "updateMakeAMealExtrasArr",
      value: state.defaultState.makeAMealExtrasArr,
    });

    dispatch({
      type: "updateDessertsArr",
      value: state.defaultState.dessertsArr,
    });

    dispatch({ type: "setDietaryFilter", value: "none" });
  };

  const goToHomeHandler = () => {
    props.onChangePage("home");
  };

  const toggleGlutenFreeHandler = () => {
    if (state.dietaryFilter !== "gfo") {
      resetStateToDefault();
      dispatch({ type: "setDietaryFilter", value: "gfo" });
      filterAllArraysHandler("gfo", state.defaultState);
    } else if (state.dietaryFilter === "gfo") {
      dispatch({ type: "setDietaryFilter", value: "none" });
      resetStateToDefault();
    }
  };

  const toggleVegetarianHandler = () => {
    if (state.dietaryFilter !== "v") {
      resetStateToDefault();
      dispatch({ type: "setDietaryFilter", value: "v" });
      filterAllArraysHandler("v", state.defaultState);
    } else if (state.dietaryFilter === "v") {
      dispatch({ type: "setDietaryFilter", value: "none" });
      resetStateToDefault();
    }
  };

  const toggleVeganHandler = () => {
    if (state.dietaryFilter !== "vgo") {
      resetStateToDefault();
      dispatch({ type: "setDietaryFilter", value: "vgo" });
      filterAllArraysHandler("vgo", state.defaultState);
    } else if (state.dietaryFilter === "vgo") {
      dispatch({ type: "setDietaryFilter", value: "none" });
      resetStateToDefault();
    }
  };

  const filterAllArraysHandler = (dietaryArgument, state) => {
    // Get the key names from the state and filter out undesired fields
    const keyNamesArr = Object.keys(state);
    const filteredKeyNamesArr = keyNamesArr.filter(
      (key) => key !== "dietaryFilter" && key !== "defaultState"
    );

    // Create a new state object with filtered arrays
    const newState = {};

    // Loop through each key name (which corresponds to a menu array in the state)
    filteredKeyNamesArr.forEach((key) => {
      // Filter the array based on the dietaryArgument and assign it to the new state
      newState[key] =
        state[key]?.filter((item) => {
          // Ensure the dietary property exists and is a string before splitting and checking it
          if (typeof item.dietary === "string") {
            const dietaryArr = item.dietary.split(",");
            return dietaryArr.some((el) => el === dietaryArgument);
          }
          return false;
        }) || []; // Ensure that if state[key] is undefined, an empty array is used instead
    });

    // Update the state with the new filtered arrays
    for (let key of filteredKeyNamesArr) {
      dispatch({
        type: `update${key.charAt(0).toUpperCase() + key.slice(1)}`, // Convert key to PascalCase and prepend with 'update'
        value: newState[key],
      });
    }
  };

  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["menu-wrapper"]}>
        {state.menusLoaded === true && (
          <React.Fragment>
            <div className={classes["u-col"]}>
              <div className={classes["title-wrapper"]}>
                <div className={classes["u-row"]}>
                  <i className={classes.icon}>
                    <GiSquirrel />
                  </i>
                  <h1 className={classes.heading}>Kids Menu</h1>
                  <i className={classes.icon}>
                    <GoSquirrel />
                  </i>
                </div>
                <p className={classes["sub-heading"]}>
                  For the wee ones we have all your favourites in fantastic
                  kiddie sized portions.
                </p>
              </div>
              <div className={classes["u-row"]}></div>
              <FilterToggleButtons
                toggleGlutenFree={toggleGlutenFreeHandler}
                toggleVegetarian={toggleVegetarianHandler}
                toggleVegan={toggleVeganHandler}
                dietaryFilter={state.dietaryFilter}
              />
              {state.startersArr.length > 0 && (
                <SecondaryColorWrapper
                  heading="STARTERS"
                  tagline="Kick off your meal the right way"
                  menuArray={state.startersArr}
                />
              )}
              {state.mainsArr.length > 0 && (
                <PrimaryColorWrapper
                  heading="MAIN MEALS"
                  tagline="All your favourites in one place"
                  menuArray={state.mainsArr}
                />
              )}
            </div>
            <div className={classes["u-col"]}>
              {state.makeAMealMainsArr.length > 0 && (
                <MakeAMealWrapper
                  mains={state.makeAMealMainsArr}
                  sides={state.makeAMealSidesArr}
                  extras={state.makeAMealExtrasArr}
                />
              )}
              {state.dessertsArr.length > 0 && (
                <SecondaryColorWrapper
                  heading="DESSERTS"
                  tagline="Save room for one of our delicious desserts"
                  menuArray={state.dessertsArr}
                />
              )}
            </div>
            <button className={classes.btn} onClick={goToHomeHandler}>
              Return to Home
            </button>
          </React.Fragment>
        )}

        {state.menusLoaded === false && (
          <div className={classes["spinner-wrapper"]}>
            <MoonLoader color="#e08220" />
          </div>
        )}

        {state.menusLoaded === "error" && (
          <div className={classes["spinner-wrapper"]}>
            <p className={classes["error-message"]}>
              Menus could not be loaded. Please try again later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;
