require(["esri/Map", "esri/views/MapView"], function(Map, MapView) {
  var map = new Map({
    basemap: "dark-gray"
  });
  
  var view = new MapView({
    container: "SMNviewDiv",
    map: map,
    zoom: 5,
    center: [-90.3, 38.6] // long, lat
  });
});
