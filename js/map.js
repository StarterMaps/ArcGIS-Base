/*********************************/
/**** Basic Map Functionality ****/
var map;
require(["esri/map", "dojo/domReady!"], function(Map) {
	map = new Map("map", {
	  basemap: "streets",
	  center: [-76.611207, 39.283825],
	  zoom: 13,
	  sliderStyle: "small"
	});
});