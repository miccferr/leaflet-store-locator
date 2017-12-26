import { createStore } from "redux";
import * as data from "../data.json";

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

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_NEW_CENTER":
      const selectedFeature = state.data.features[action.featureIndex];
      const newCenter = [
        selectedFeature.geometry.coordinates[1],
        selectedFeature.geometry.coordinates[0],
      ];
      return {
        ...state,
        options: {
          ...state.options,
          center: newCenter,
          zoom: 10,
        },
      };
    case "RESET_STATE":
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}
export { reducer };
