import React from "react";
import "./StoreLocListItem.css";

const StoreLocListItem = props => {
  // console.log(props);
  return (
    <div className="item">
      <a
        href="#"
        className=" title"
        onClick={e => {
          e.preventDefault();
          props.centerOnStore(props.center);
        }}
      >
        {props.address}
      </a>
      <br />
      {props.business_name}
      {props.phone}
    </div>
  );
};

export default StoreLocListItem;
