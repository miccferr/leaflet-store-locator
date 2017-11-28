import React from "react";
import L from "leaflet";
import { Popup, Marker } from "react-leaflet";

const colorURL = c => `https://api.tiles.mapbox.com/v3/marker/pin-m-circle+${c}@2x.png`;

const myIcon = color =>
  L.icon({
    iconUrl: color,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    // shadowUrl: "my-icon-shadow.png",
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

const Markers = (f, i) => {
  let color;
  switch (f.properties.resseller_type) {
    case "E-commerce and Store":
      color = colorURL("2c7bb6");
    case "Distributor":
      color = colorURL("d7191c");
    case "Factory Store":
      color = colorURL("99cc99");
    case "Factory Outlet":
      color = colorURL("ffffbf");
    case "Retail":
      color = colorURL("fdae61");
    case "Head Quarter":
      color = colorURL("abd9e9");
    default:
      color = colorURL("ff8af2");
  }

  return (
    <Marker
      key={i}
      position={[f.geometry.coordinates[1], f.geometry.coordinates[0]]}
      icon={myIcon(color)}
    >
      <Popup>
        <span>
          {f.properties.business_name}
          <br />
          {f.properties.address}
        </span>
      </Popup>
    </Marker>
  );
};

export default Markers;
