import React from "react";
import { render } from "react-dom";
import { Map, TileLayer, ZoomControl } from "react-leaflet";
import "./Map.css";
import Markers from "../Markers/Markers.js";

import L from "leaflet";

const position = [51.505, -0.09];

const MyMap = props => (
  <Map
    zoomControl={false}
    center={props.center.length != 0 && props.center.length != null ? props.center : position}
    zoom={props.zoom ? props.zoom : 2}
    style={{
      position: "relative",
      height: "100%",
      width: "100%",
    }}
    onViewportChange={() => {
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
    <ZoomControl position="topright" />
    {props.data.map((f, i) => Markers(f, i, props))}
  </Map>
);

export default MyMap;
