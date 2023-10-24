import React, { useReducer, useEffect } from "react";
import { MoonLoader } from "react-spinners";

import classes from "./Drinks.module.scss";

import TwoPriceWrapper from "../../components/drinks-menu-components/two-price-wrapper/TwoPriceWrapper";
import GenericItemWrapper from "../../components/drinks-menu-components/generic-item-wrapper/GenericItemWrapper";
import WinesWrapper from "../../components/drinks-menu-components/wines-wrapper/WinesWrapper";

const initState = {
  dietaryFiler: "none",
  menusLoaded: false,
  draughtBeerAndCiderArr: null,
  bottledBeerAndCiderArr: null,
  scottishFyneAlesArr: null,
  ginArr: null,
  cocktailsArr: null,
  frozenCocktailsArr: null,
  vodkaArr: null,
  spiritsArr: null,
  shootersArr: null,
  maltsArr: null,
  redWineArr: null,
  roseWineArr: null,
  whiteWineArr: null,
  sparklingWineArr: null,
  champagneArr: null,
  mixersArr: null,
  softDrinks10ozArr: null,
  softDrinks330mlArr: null,
  softDrinks275mlArr: null,
  softDrinks250mlArr: null,
};

const reducer = (state = initState, { type, value }) => {
  switch (type) {
    case "setMenusLoaded":
      return { ...state, menusLoaded: value };
    case "updateDraughtBeerAndCiderArr":
      return { ...state, draughtBeerAndCiderArr: value };
    case "updateBottledBeerAndCiderArr":
      return { ...state, bottledBeerAndCiderArr: value };
    case "updateScottishFyneAlesArr":
      return { ...state, scottishFyneAlesArr: value };
    case "updateGinArr":
      return { ...state, ginArr: value };
    case "updateCocktailsArr":
      return { ...state, cocktailsArr: value };
    case "updateFrozenCocktailsArr":
      return { ...state, frozenCocktailsArr: value };
    case "updateVodkaArr":
      return { ...state, vodkaArr: value };
    case "updateSpiritsArr":
      return { ...state, spiritsArr: value };
    case "updateShootersArr":
      return { ...state, shootersArr: value };
    case "updateMaltsArr":
      return { ...state, maltsArr: value };
    case "updateRedWineArr":
      return { ...state, redWineArr: value };
    case "updateRoseWineArr":
      return { ...state, roseWineArr: value };
    case "updateWhiteWineArr":
      return { ...state, whiteWineArr: value };
    case "updateSparklingWineArr":
      return { ...state, sparklingWineArr: value };
    case "updateChampagneArr":
      return { ...state, champagneArr: value };
    case "updateMixersArr":
      return { ...state, mixersArr: value };
    case "updateSoftDrinks10ozArr":
      return { ...state, softDrinks10ozArr: value };
    case "updateSoftDrinks330mlArr":
      return { ...state, softDrinks330mlArr: value };
    case "updateSoftDrinks275mlArr":
      return { ...state, softDrinks275mlArr: value };
    case "updateSoftDrinks250mlArr":
      return { ...state, softDrinks250mlArr: value };
    case "updateDietaryFilter":
      return { ...state, dietaryFilter: value };
    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const Drinks = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    fetch(
      "https://view-backend-172v-e190af3eb261.herokuapp.com/api/v1/drinks-menu/get-every-array",
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
          type: "updateDraughtBeerAndCiderArr",
          value: dataObj.payload.data.draughtBeerAndCiderArr,
        });
        dispatch({
          type: "updateBottledBeerAndCiderArr",
          value: dataObj.payload.data.bottledBeerAndCiderArr,
        });
        dispatch({
          type: "updateScottishFyneAlesArr",
          value: dataObj.payload.data.scottishFyneAlesArr,
        });
        dispatch({
          type: "updateGinArr",
          value: dataObj.payload.data.ginArr,
        });
        dispatch({
          type: "updateCocktailsArr",
          value: dataObj.payload.data.cocktailsArr,
        });
        dispatch({
          type: "updateFrozenCocktailsArr",
          value: dataObj.payload.data.frozenCocktailsArr,
        });
        dispatch({
          type: "updateVodkaArr",
          value: dataObj.payload.data.vodkaArr,
        });
        dispatch({
          type: "updateSpiritsArr",
          value: dataObj.payload.data.spiritsArr,
        });
        dispatch({
          type: "updateShootersArr",
          value: dataObj.payload.data.shootersArr,
        });
        dispatch({
          type: "updateMaltsArr",
          value: dataObj.payload.data.maltsArr,
        });
        dispatch({
          type: "updateRedWineArr",
          value: dataObj.payload.data.redWineArr,
        });
        dispatch({
          type: "updateRoseWineArr",
          value: dataObj.payload.data.roseWineArr,
        });
        dispatch({
          type: "updateWhiteWineArr",
          value: dataObj.payload.data.whiteWineArr,
        });
        dispatch({
          type: "updateSparklingWineArr",
          value: dataObj.payload.data.sparklingWineArr,
        });
        dispatch({
          type: "updateChampagneArr",
          value: dataObj.payload.data.champagneArr,
        });
        dispatch({
          type: "updateMixersArr",
          value: dataObj.payload.data.mixersArr,
        });
        dispatch({
          type: "updateSoftDrinks10ozArr",
          value: dataObj.payload.data.softDrinks10ozArr,
        });
        dispatch({
          type: "updateSoftDrinks330mlArr",
          value: dataObj.payload.data.softDrinks330mlArr,
        });
        dispatch({
          type: "updateSoftDrinks275mlArr",
          value: dataObj.payload.data.softDrinks275mlArr,
        });
        dispatch({
          type: "updateSoftDrinks250mlArr",
          value: dataObj.payload.data.softDrinks250mlArr,
        });

        dispatch({ type: "setMenusLoaded", value: true });
      })
      .catch((error) => {
        dispatch({ type: "setMenusLoaded", value: "error" });
      });
  }, []);

  const goToHomeHandler = () => {
    props.onChangePage("home");
  };

  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["menu-wrapper"]}>
        {state.menusLoaded === true && (
          <React.Fragment>
            <div className={classes["header"]}>
              <h1 className={classes.heading}>Drinks Menu</h1>
            </div>
            <img
              className={classes.logo}
              src="/images/view.jpg"
              alt="view logo"
            />
            <div className={classes["col-1"]}>
              <TwoPriceWrapper
                heading="Draught Beer & Cider"
                price1="pint"
                price2="½ pint"
                menuArr={state.draughtBeerAndCiderArr}
              />
              <GenericItemWrapper
                heading="Bottled Beer & Cider"
                menuArr={state.bottledBeerAndCiderArr}
              />
              <GenericItemWrapper
                heading="Scottish Fyne Ales"
                menuArr={state.scottishFyneAlesArr}
              />

              <GenericItemWrapper heading="Gin" menuArr={state.ginArr} />
              <GenericItemWrapper
                heading="Cocktails"
                menuArr={state.cocktailsArr}
              />
              <p className={classes.info}>
                Tapp'd cocktails are made using real fruit, vegan and gluten
                free ingredients with ethically sourced coffee and award-winning
                spirits used to deliver exceptional quality and a perfect pour
                every time.
              </p>
              <GenericItemWrapper
                heading="Frozen Cocktail"
                menuArr={state.frozenCocktailsArr}
              />
              <GenericItemWrapper
                heading="Vodka"
                measure="25"
                menuArr={state.vodkaArr}
              />
              <GenericItemWrapper
                heading="Spirits"
                measure="25"
                menuArr={state.spiritsArr}
              />
              <GenericItemWrapper
                heading="Shooters"
                menuArr={state.shootersArr}
              />
            </div>
            <div className={classes["col-2"]}>
              <GenericItemWrapper
                heading="Malts"
                measure="25"
                menuArr={state.maltsArr}
              />
              <WinesWrapper heading="Red Wine" menuArr={state.redWineArr} />
              <WinesWrapper heading="Rosé Wine" menuArr={state.roseWineArr} />
              <WinesWrapper heading="White Wine" menuArr={state.whiteWineArr} />
              <WinesWrapper
                heading="Sparkling"
                menuArr={state.sparklingWineArr}
                key="random"
              />
              <WinesWrapper heading="Champagne" menuArr={state.champagneArr} />
              <GenericItemWrapper
                heading="Mixers"
                measure="200"
                menuArr={state.mixersArr}
              />
              <TwoPriceWrapper
                heading="Soft Drinks"
                price1="10oz"
                price2="16oz"
                menuArr={state.softDrinks10ozArr}
                menuArr2={state.softDrinks330mlArr}
                menuArr3={state.softDrinks275mlArr}
                menuArr4={state.softDrinks250mlArr}
              />
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

export default Drinks;
