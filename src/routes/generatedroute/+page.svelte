
<a id="back_button" href="../">Back</a>
<button id="doneBtn" class="btn btn-xl variant-filled" on:click={handleClick}>Done</button>
<div id="map" bind:this={mapElement}></div>
<script>
// - - - - - - - SVELTE ROUTE IMPORTS - - - - - - -
  import { goto } from "$app/navigation";
// - - - - - - - MAPBOX IMPORTS - - - - - - -
  import { onMount } from "svelte";
  import mapboxgl from "mapbox-gl";
// - - - - - - - SHARED VARIABLE IMPORTS - - - - - - -
  //import startPlace from "../+page.svelte";
  //import endPlace from "../+page.svelte";
  import { startValue } from '$lib/stores';
  import { endValue } from '$lib/stores';

  // for use in subscribing to start, end store values
  let startPoint;
  let endPoint;
  // for use in generating route
  let start;
  let end;

	startValue.subscribe((value) => {
		startPoint = value;
	});
  endValue.subscribe((value) => {
		endPoint = value;
	});
  // - - - - - - - DETERMINE START AND END BASED ON STRING VALUES FROM DROPDOWN MENU - - - - - - -
  // Can improve on this by storing longitude and latitude data to somewhere, instead of direct hardcoding
  if (startPoint === 'AECH') {
     start = [ 121.068689757108132, 14.648708168263134 ];
  } else if (startPoint === 'CSLib') {
     start =  [121.069113351711948, 14.649259614804413];
  } else if (startPoint === 'EEEI') {
     start = [ 121.068357398535895, 14.649567867969143 ];
  } else if (startPoint === 'IMath') {
     start = [ 121.070964437966168, 14.648304820957335 ];
  } else if (startPoint === 'IESM') {
     start = [ 121.070083790064402, 14.648249523277556 ];
  } else if (startPoint === 'NIGS') {
     start = [ 121.069456352161723, 14.648350367516176 ]; 
  }

  if (endPoint === 'AECH') {
     end = [ 121.068689757108132, 14.648708168263134 ];
  } else if (endPoint === 'CSLib') {
     end =  [121.069113351711948, 14.649259614804413];
  } else if (endPoint === 'EEEI') {
     end = [ 121.068357398535895, 14.649567867969143 ];
  } else if (endPoint === 'IMath') {
     end = [ 121.070964437966168, 14.648304820957335 ];
  } else if (endPoint === 'IESM') {
     end = [ 121.070083790064402, 14.648249523277556 ];
  } else if (endPoint === 'NIGS') {
     end = [ 121.069456352161723, 14.648350367516176 ]; 
  }
  //- - - - - SETUP MAP PROPERTIES - - - - - - -
  //start = [ 121.068689757108132, 14.648708168263134 ];  //TRY DEFINING ARBITRARY START POINT FOR NAVIGATION
  //end = [ 121.070964437966168, 14.648304820957335 ]; //TRY DEFINING ARBITRARY END POINT FOR NAVIGATION

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
  //const bounds = [
  //      [121.067833, 14.647044], // SouthWest coordinates
  //      [121.072471, 14.650501] // NorthEast coordinates
  //  ];
  
  function handleClick() {
			window.alert('You have arrived at your destination.');
			const url = `../`;
			goto(url);
	}

// - - - - - - - MOUNT MAP - - - - - - - 
  onMount(() => {
  createMap();
  });

// GET ROUTE FUNCTION FOR DIRECTIONS REQUEST
// create a function to make a directions request
  async function getRoute(start, end) {
  // make a directions request using walking profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${start[0]},${start[1]};${end[0]},${end[1]}?steps=true&geometries=geojson&access_token=${accessToken}`,
    { method: 'GET' }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: route
    }
  };
  // if the route already exists on the map, we'll reset it using setData
  if (map.getSource('route')) {
    map.getSource('route').setData(geojson);
  }
  // otherwise, we'll make a new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#ff0f0f',
        'line-width': 5,
        'line-opacity': 0.75
      }
    });
  }
}

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
    // Note: Could fix custom map
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

    // REQUEST FOR DIRECTIONS
    getRoute(start, end);
    // ADD STARTING POINT AS A LAYER IN THE MAP
    map.addLayer({
      id: 'point',
      type: 'circle',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              properties: {},
              geometry: {
                type: 'Point',
                coordinates: start
              }
            }
          ]
        }
      },
      paint: {
        'circle-radius': 10,
        'circle-color': '#ff0f0f'
      }
    });
  // CAN ADD MORE FEATURES UPON LOADING HERE

  });
  // - - - - - - - MAP ON LOAD END - - - - - - -  
  // - - - - - - - MAP ON LOAD ASYNC - - - - - - -  
  map.on('load', async () => {
        // GET YOUR CURRENT LOCATION
        const geojson = await getLocation();
        // ADD YOUR CURRENT LOCATION AS A SOURCE
        map.addSource('myPosition', {
            type: 'geojson',
            data: geojson
        });
        // ADD POINT AS A LAYER ON THE MAP
        map.addLayer({
            'id': 'myPosition',
            'type': 'circle',
            'source': 'myPosition',
            paint: {
              'circle-radius': 10,
              'circle-color': '#ff0f0f'
            }
        });

        // UPDATE CURRENT LOCATION SOURCE EVERY 2 SECONDS
        const updateSource = setInterval(async () => {
            const geojson = await getLocation(updateSource);
            map.getSource('myPosition').setData(geojson);
        }, 2000);

        // GET CURRENT POSITION VIA NAVIGATOR
        function getCurrentPosition() {
          return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
        }
      
        // GET LOCATION FUNCTION
        async function getLocation(updateSource) {
            // TRY SECTION
            try {
                // GET CURRENT POSITION
                const position = await getCurrentPosition();
                const { latitude, longitude } = position.coords;
                // FLY TO YOUR CURRENT POSITION
                map.flyTo({
                    center: [longitude, latitude],
                    speed: 1,
                    zoom: 18.3
                });
                // RETURN YOUR CURRENT POSITION AS A GEOJSON
                return {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [longitude, latitude]
                            }
                        }
                    ]
                };
            // CATCH SECTION
            } catch (err) {
                if (updateSource) clearInterval(updateSource);
                throw new Error(err);
            }
        }
  });

  // - - - - - - - MAP ON LOAD ASYNC END- - - - - - -  
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
  #doneBtn {
    position: absolute;
    margin-top: 5%;
    margin-left: 75%;
    color: blue;
    font-size: 1em;
    padding: 0.5em 1em;
  }
</style>