import { POI, INFO, ROUTE } from './data';

const mapboxUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
const mapboxAccessToken = 'pk.eyJ1IjoiaXZhbmJhcmNpYSIsImEiOiJjamNocGk5Zm0xb2N5Mnhyd2s2N2p3dDJqIn0.uefaRpiCGUMmidl319j8Uw';
const mapboxAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>. Ruta creada por Iván Barcia';


document.addEventListener('DOMContentLoaded', function() {

	const mapStyle = {
		topo: L.tileLayer(mapboxUrl, {id: 'ivanbarcia/ckd8yhmn9170j1is2caxt925q', tileSize: 512, zoomOffset: -1, attribution: mapboxAttribution, accessToken: mapboxAccessToken}),
		orto: L.tileLayer.wms('https://www.ign.es/wms-inspire/pnoa-ma', { layers: 'OI.OrthoimageCoverage' })
	}




	const layer = {
		poi: L.geoJSON(POI).bindPopup(function (layer) {
				return layer.feature.properties.name;
		}),
		info: L.geoJSON(INFO, {
			style: function (feature) {
						return {color: red};
				}
		}),
		route: L.geoJSON(ROUTE)
	}


	// Map
	const map = L.map('map', {
		center: [42.968,-8.632],
    zoom: 13,
		layers: [mapStyle.topo, layer.poi, layer.route],
		fullscreenControl: true
	});



	// Layers
	const baseMaps = {
		"Topográfico": mapStyle.topo,
		"Ortofoto": mapStyle.orto,
	};

	const overlayMaps = {
		"Ruta": layer.route,
		"Puntos de interese": layer.poi,
		"Info": layer.info,
	};

	L.control.layers(baseMaps, overlayMaps, {
		collapsed: false
	}).addTo(map);


	// Scale
	L.control.scale({
		imperial: false
	}).addTo(map);

	// Location
	L.control.locate().addTo(map);
})
