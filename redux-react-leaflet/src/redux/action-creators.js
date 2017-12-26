import * as Constants from "../constant.js";

export function setCenter(featureIndex) {
  return {
    type: Constants.SET_NEW_CENTER,
    featureIndex,
  };
}

export function resetState() {
  return { type: "RESET_STATE" };
}
