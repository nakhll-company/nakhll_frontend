import EmptyLayout from "../../components/layout/EmptyLayout";
import React, { useState } from "react";
import Map from "react-map-gl";

function MapPage() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 32.7688,
    longitude: 51.806161,
    zoom: 5,
  });
  return (
    <div style={{ height: "100vh" }}>
      <Map
        mapStyle="mapbox://styles/milad7212/cl5gfot65006n14rzfxt6y469"
        mapboxAccessToken="pk.eyJ1IjoibWlsYWQ3MjEyIiwiYSI6ImNsNWc5ZGlxcDFpbjgzY28ycnR2NTgwNGYifQ.PByEMEKi4kcUj6WQ3Gci4A"
        {...viewport}
        onMove={(evt) => setViewport(evt.viewState)}
      ></Map>
    </div>
  );
}

export default MapPage;
MapPage.Layout = EmptyLayout;
