import { createStore } from "redux";
import * as data from "../../data.json";

const options = {
  resellerTypeClicked: false,
  center: [],
  zoom: 2,
};

const initialState = {
  data,
  options,
};

// function geoCountryList(state = [], action) {
//   let filtered = [...new Set(state.map(f => f.properties.country.toUpperCase()))];
//   return filtered;
// }

// function menuList(state = initialState.features, action) {
//   switch (action.type) {
//     case "GEO_COUNTRY":
//       return { ...state, ...geoCountryList(state) };
//     default:
//       return state;
//   }
// }

// const store = createStore(menuList);
