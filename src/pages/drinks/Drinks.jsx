import React, { useReducer } from "react";

import classes from "./Drinks.module.scss";

import drinksMenu from "../../dev/menus/drinksMenu";

import TwoPriceWrapper from "../../components/drinks-menu-components/two-price-wrapper/TwoPriceWrapper";
import GenericItemWrapper from "../../components/drinks-menu-components/generic-item-wrapper/GenericItemWrapper";
import WinesWrapper from "../../components/drinks-menu-components/wines-wrapper/WinesWrapper";

const initState = {
  dietaryFiler: "none",
  draughtBeerAndCiderArr: drinksMenu.draughtBeerAndCiderArr,
  bottledBeerAndCiderArr: drinksMenu.bottledBeerAndCiderArr,
  scottishFyneAlesArr: drinksMenu.scottishFyneAlesArr,
  ginArr: drinksMenu.ginArr,
  cocktailsArr: drinksMenu.cocktailsArr,
  frozenCocktailsArr: drinksMenu.frozenCocktailsArr,
  vodkaArr: drinksMenu.vodkaArr,
  spiritsArr: drinksMenu.spiritsArr,
  shootersArr: drinksMenu.shootersArr,
  maltsArr: drinksMenu.maltsArr,
  redWineArr: drinksMenu.redWineArr,
  roseWineArr: drinksMenu.roseWineArr,
  whiteWineArr: drinksMenu.whiteWineArr,
  sparklingArr: drinksMenu.sparklingArr,
  champagneArr: drinksMenu.champagneArr,
  mixersArr: drinksMenu.mixersArr,
  softDrinks10ozArr: drinksMenu.softDrinks10ozArr,
  softDrinks330mlArr: drinksMenu.softDrinks330mlArr,
  softDrinks275mlArr: drinksMenu.softDrinks275mlArr,
  softDrinks250mlArr: drinksMenu.softDrinks250mlArr,
};

const defaultState = {
  dietaryFiler: "none",
  draughtBeerAndCiderArr: drinksMenu.draughtBeerAndCiderArr,
  bottledBeerAndCiderArr: drinksMenu.bottledBeerAndCiderArr,
  scottishFyneAlesArr: drinksMenu.scottishFyneAlesArr,
  ginArr: drinksMenu.ginArr,
  cocktailsArr: drinksMenu.cocktailsArr,
  frozenCocktailsArr: drinksMenu.frozenCocktailsArr,
  vodkaArr: drinksMenu.vodkaArr,
  spiritsArr: drinksMenu.spiritsArr,
  shootersArr: drinksMenu.shootersArr,
  maltsArr: drinksMenu.maltsArr,
  redWineArr: drinksMenu.redWineArr,
  roseWineArr: drinksMenu.roseWineArr,
  whiteWineArr: drinksMenu.whiteWineArr,
  sparklingArr: drinksMenu.sparklingArr,
  champagneArr: drinksMenu.champagneArr,
  mixersArr: drinksMenu.mixersArr,
  softDrinks10ozArr: drinksMenu.softDrinks10ozArr,
  softDrinks330mlArr: drinksMenu.softDrinks330mlArr,
  softDrinks275mlArr: drinksMenu.softDrinks275mlArr,
  softDrinks250mlArr: drinksMenu.softDrinks250mlArr,
};

const reducer = (state, action) => {
  // switch (type) {
  //   default:
  //     throw new Error();
  // }
};

const Drinks = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const goToHomeHandler = () => {
    props.onChangePage("home");
  };

  return (
    <div className={classes["page-wrapper"]}>
      <div className={classes["menu-wrapper"]}>
        <div className={classes["header"]}>
          <h1 className={classes.heading}>Drinks Menu</h1>
        </div>
        <img className={classes.logo} src="/images/view.jpg" alt="view logo" />
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
            Tapp'd cocktails are made using real fruit, vegan and gluten free
            ingredients with ethically sourced coffee and award-winning spirits
            used to deliver exceptional quality and a perfect pour every time.
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
          <GenericItemWrapper heading="Shooters" menuArr={state.shootersArr} />
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
            menuArr={state.sparklingArr}
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
      </div>
    </div>
  );
};

export default Drinks;
