import React, { Component } from "react";

const StoresList = props => {
  console.log(props);
  const StoreItem = props.data.features.map((e, i) => (
    <li
      key={i}
      onClick={e => {
        e.preventDefault();
        props.setCenter(i);
      }}
    >
      {e.properties.address}
    </li>
  ));
  return <ul>{StoreItem} </ul>;
};

export default StoresList;
