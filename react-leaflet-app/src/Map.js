import React from "react";
import { render } from "react-dom";
import { Map, TileLayer } from "react-leaflet";
import "./Map.css";
import Markers from "./Markers";

const position = [51.505, -0.09];
const MyMap = props => (
  <Map
    center={position}
    zoom={13}
    style={{
      height: `${window.innerHeight}px`,
      width: `${window.innerWidth}px`,
    }}
    onViewportChange={() => {
      console.log(window.innerHeight);
      return {
        height: `${window.innerHeight}px`,
        width: `${window.innerWidth}px`,
      };
    }}
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    {props.data.map((f, i) => Markers(f, i))}
  </Map>
);

export default MyMap;
