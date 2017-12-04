import React from "react";
import "./StoreLocMenuContainer.css";
import StoreLocListItem from "./StoreLocListItem.js";

const StoreLocMenuContainer = props => {
  return (
    <ul id="storeLocMenuContainer-list-cont" className="listings">
      {props.storeLocs.map((f, i) => (
        <StoreLocListItem
          key={i}
          address={f.properties.address}
          phone={f.properties.phone}
          name={f.properties.business_name}
          center={f.geometry.coordinates}
          centerOnStore={props.centerOnStore}
        />
      ))}
    </ul>
  );
};
export default StoreLocMenuContainer;
