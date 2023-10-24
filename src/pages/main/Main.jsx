import React, { useReducer, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./Main.module.scss";

import FilterToggleButtons from "../../components/cross-menu-components/FilterToggleButtons";
import SectionWrapper from "../../components/main-menu-components/section-wrapper/SectionWrapper";
import SectionBorderWrapper from "../../components/main-menu-components/section-border-wrapper/SectionBorderWrapper";
import SaladsWrapper from "../../components/main-menu-components/salads-wrapper/SaladsWrapper";
import SteakBorderWrapper from "../../components/main-menu-components/steak-border-wrapper/SteakBorderWrapper";
import SidesWrapper from "../../components/main-menu-components/sides-wrapper/SidesWrapper";

const initState = {
  dietaryFilter: "none",
  menusLoaded: false,
  startersArr: null,
  sharersArr: null,
  mainsArr: null,
  saladsArr: null,
  steaksArr: null,
  steakSidesArr: null,
  burgersArr: null,
  sidesArr: null,
  loadedFriesArr: null,
  dessertsArr: null,
  defaultState: {},
};

const reducer = (state, { type, value }) => {
  switch (type) {
    ///// Set the dietary filters
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
    case "updateSharersArr":
      return { ...state, sharersArr: value };
    case "updateMainsArr":
      return { ...state, mainsArr: value };
    case "updateSaladsArr":
      return { ...state, saladsArr: value };
    case "updateSteaksArr":
      return { ...state, steaksArr: value };
    case "updateSteakSidesArr":
      return { ...state, steakSidesArr: value };
    case "updateBurgersArr":
      return { ...state, burgersArr: value };
    case "updateSidesArr":
      return { ...state, sidesArr: value };
    case "updateLoadedFriesArr":
      return { ...state, loadedFriesArr: value };
    case "updateDessertsArr":
      return { ...state, dessertsArr: value };

    default:
      throw new Error();
  }
};

const Main = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  //////////////////////////////////////
  useEffect(() => {
    fetch(
      "https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/main-menu/get-every-array",
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
          type: "updateSharersArr",
          value: dataObj.payload.data.sharersArr,
        });
        dispatch({
          type: "updateMainsArr",
          value: dataObj.payload.data.mainsArr,
        });
        dispatch({
          type: "updateSaladsArr",
          value: dataObj.payload.data.saladsArr,
        });
        dispatch({
          type: "updateSteaksArr",
          value: dataObj.payload.data.steaksArr,
        });
        dispatch({
          type: "updateBurgersArr",
          value: dataObj.payload.data.burgersArr,
        });
        dispatch({
          type: "updateSteakSidesArr",
          value: dataObj.payload.data.steakSidesArr,
        });
        dispatch({
          type: "updateSidesArr",
          value: dataObj.payload.data.sidesArr,
        });
        dispatch({
          type: "updateLoadedFriesArr",
          value: dataObj.payload.data.loadedFriesArr,
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
            sharersArr: dataObj.payload.data.sharersArr,
            mainsArr: dataObj.payload.data.mainsArr,
            saladsArr: dataObj.payload.data.saladsArr,
            steaksArr: dataObj.payload.data.steaksArr,
            steakSidesArr: dataObj.payload.data.steakSidesArr,
            burgersArr: dataObj.payload.data.burgersArr,
            sidesArr: dataObj.payload.data.sidesArr,
            loadedFriesArr: dataObj.payload.data.loadedFriesArr,
            dessertsArr: dataObj.payload.data.dessertsArr,
          },
        });

        dispatch({ type: "setMenusLoaded", value: true });
      })
      .catch((error) => {
        dispatch({ type: "setMenusLoaded", value: "error" });
      });
  }, []);
  ///////////////////////////////////////////////////////

  const resetStateToDefault = () => {
    dispatch({
      type: "updateStartersArr",
      value: state.defaultState.startersArr,
    });
    dispatch({
      type: "updateSharersArr",
      value: state.defaultState.sharersArr,
    });
    dispatch({
      type: "updateMainsArr",
      value: state.defaultState.mainsArr,
    });
    dispatch({
      type: "updateSaladsArr",
      value: state.defaultState.saladsArr,
    });
    dispatch({
      type: "updateSteaksArr",
      value: state.defaultState.steaksArr,
    });
    dispatch({
      type: "updateBurgersArr",
      value: state.defaultState.burgersArr,
    });
    dispatch({
      type: "updateSteakSidesArr",
      value: state.defaultState.steakSidesArr,
    });
    dispatch({
      type: "updateSidesArr",
      value: state.defaultState.sidesArr,
    });
    dispatch({
      type: "updateLoadedFriesArr",
      value: state.defaultState.loadedFriesArr,
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
            <div className={classes["dinner-wrapper"]}>
              <h1 className={classes.heading}>Dinner</h1>
              <FilterToggleButtons
                toggleGlutenFree={toggleGlutenFreeHandler}
                toggleVegetarian={toggleVegetarianHandler}
                toggleVegan={toggleVeganHandler}
                dietaryFilter={state.dietaryFilter}
              />
            </div>
            <img className={classes.logo} src="images/view.jpg" alt="view" />

            <div className={classes["col-1"]}>
              {state.startersArr.length > 0 && (
                <SectionBorderWrapper
                  heading={"Starters"}
                  menuArray={state.startersArr}
                  subMenuHeading={"Sharer"}
                  subMenuArray={state.sharersArr}
                />
              )}

              {state.mainsArr.length > 0 && (
                <SectionWrapper
                  heading={"Main Menu"}
                  menuArray={state.mainsArr}
                />
              )}
            </div>

            <div className={classes["col-2"]}>
              {state.saladsArr.length > 0 && (
                <SaladsWrapper heading={"Salads"} menuArray={state.saladsArr} />
              )}
              {state.steaksArr.length > 0 && (
                <SteakBorderWrapper
                  heading={"Steaks"}
                  menuArray={state.steaksArr}
                  steakSides={state.steakSidesArr}
                />
              )}
              {state.burgersArr.length > 0 && (
                <SectionWrapper
                  heading="Burgers"
                  menuArray={state.burgersArr}
                />
              )}
              {state.sidesArr.length > 0 && (
                <SidesWrapper heading={"Sides"} menuArray={state.sidesArr} />
              )}
            </div>

            <div className={classes["col-3"]}>
              {state.loadedFriesArr.length > 0 && (
                <SidesWrapper
                  heading={"Loaded Fries"}
                  menuArray={state.loadedFriesArr}
                />
              )}
              {state.dessertsArr.length > 0 && (
                <SectionBorderWrapper
                  heading={"Desserts"}
                  menuArray={state.dessertsArr}
                  subMenuHeading={"Ice Cream"}
                />
              )}
              <p className={classes.smallprint}>
                A full list of allergen information is available, please ask
                your server for information
              </p>
              <p className={classes.smallprint}>
                We cannot guarantee an allergen-free environment or products.
                Prices are in pounds Sterling and include VAT
              </p>
              <p className={classes.smallprint}>
                This menu may be available for limited periods and all dishes
                are subject to availability
              </p>
              <p className={classes.smallprint}>
                We strive to offer suitable alternatives where possible
              </p>
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

export default Main;
