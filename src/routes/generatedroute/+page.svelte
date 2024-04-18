
<a id="back_button" href="../">Back</a>
<div id="map" bind:this={mapElement}></div>

<script>
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";

// - - - - - - - SETUP MAP PROPERTIES - - - - - - -
  const start = [121.069, 14.649];  //TRY DEFINING ARBITRARY START POINT
  let mapElement;
  let map = null;
  let accessToken = 'pk.eyJ1IjoiamJ2aWNlcnJhIiwiYSI6ImNsdjBudzkwbDBmNW0yaXZwamhodDFsZTQifQ.M2wEKMepxK2f0le_AJ4Xmw';
  let mapStyle = 'mapbox://styles/mapbox/streets-v12';
  let viewState = {
  longitude: 121.069,
  latitude: 14.649,
  zoom: 18.3,
  };

  // for setting max bounds when panning
  const bounds = [
        [121.067833, 14.647044], // SouthWest coordinates
        [121.072471, 14.650501] // NorthEast coordinates
    ];

// - - - - - - - MOUNT MAP - - - - - - - 
  onMount(() => {
  createMap();
  });

// - - - - - - - SETUP MAP - - - - - - - 
function createMap() {
  map = new mapboxgl.Map({
    accessToken: accessToken,
    container: 'map',
    style: mapStyle,
    center: [viewState.longitude, viewState.latitude],
    zoom: viewState.zoom,
    //maxBounds: bounds
  });
  // - - - - - - - ADD MAP LAYERS UPON LOADING - - - - - - - 
  map.on('load', function() {
    // ADD A TEST SOURCE, THEN ADD AS A LAYER
    //map.addSource('contours', {
    //      type: 'vector',
    //      url: 'mapbox://mapbox.mapbox-terrain-v2'
    //  });
    //  map.addLayer({
    //      'id': 'contours',
    //      'type': 'line',
    //      'source': 'contours', //Must match source
    //      'source-layer': 'contour',
    //  });

    // Note: Could add more safety for token
    // ADD BUILDINGS AS A SOURCE, THEN ADD AS A LAYER
    map.addSource('buildings', {
        type: 'vector',
        url: 'mapbox://jbvicerra.1n1y9058' //from tileset id
    });
    map.addLayer({
        'id': 'buildingsLayer',
        'type': 'fill',
        'source': 'buildings', //Must match source
        'source-layer': 'building-cip39e', //from tileset
        'paint': {
          'fill-color': '#70a974'
        }
    })

    // ADD ROADS AS A SOURCE
    map.addSource('roads', {
        type: 'vector',
        url: 'mapbox://jbvicerra.5uo0osgn' //from tileset id
    });
    map.addLayer({
        'id': 'roadsLayer',
        'type': 'line',
        'source': 'roads', //Must match source
        'source-layer': 'roads2-0rh6ym', //from tileset
        'paint': {
          'line-color': '#969696',
          'line-width': 5
        }
    })

    // ADD ENTRANCES AS A SOURCE
    map.addSource('entrances', {
        type: 'vector',
        url: 'mapbox://jbvicerra.68nr8fqg' //from tileset id
    });
    map.addLayer({
        'id': 'entrancesLayer',
        'type': 'circle',
        'source': 'entrances', //Must match source
        'source-layer': 'entrance-0c31sm', //from tileset
        'paint': {
          'circle-color': '#ff0f0f',
          'circle-radius': 10
        }
    })
    // DISABLE MAP ZOOM
    map.scrollZoom.disable();
    });
  }

</script>

<style>
  #map {
    width: 100vw;
    height: 100vh;
    margin-top: 10vh;
  }
  #back_button {
    position: absolute;
    margin-top: 5%;
    margin-left: 5%;
    color: blue;
  }
</style>