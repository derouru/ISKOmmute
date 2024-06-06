<svelte:head>
    <title>Generated Route | ISKOmmute</title>
</svelte:head>
<button id="back_button" class="btn btn-xl variant-filled" on:click={handleClick}> &lt; </button>
<div id="instructions">
  <div id = "instructionswrapper">
    <img id="walkingimg" src={walkingMan} alt="walking-icon-free" width=30px, height=auto>
    <div id="instructionupd"></div>
  </div>
</div>
<div id="map" bind:this={mapElement}></div>

<script>
  import walkingMan from "$lib/assets/walking-icon.svg";
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
  import { coordinate } from '$lib/coords.js';

  // for use in subscribing to start, end store values
  let startPoint;
  let endPoint;
  // for use in generating route
  let start;
  let end;

  // for use in displaying time + calculating ETA
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';

	startValue.subscribe((value) => {
		startPoint = value;
	});
  endValue.subscribe((value) => {
		endPoint = value;
	});
  // - - - - - - - DETERMINE START AND END BASED ON STRING VALUES FROM DROPDOWN MENU - - - - - - -
  // Can improve on this by storing longitude and latitude data to somewhere, instead of direct hardcoding
  start = coordinate[startPoint];
  end = coordinate[endPoint];

  //- - - - - SETUP MAP PROPERTIES - - - - - - - - - - - - - -  
  //start = [ 121.068689757108132, 14.648708168263134 ];  //TRY DEFINING ARBITRARY START POINT FOR NAVIGATION
  //end = [ 121.070964437966168, 14.648304820957335 ]; //TRY DEFINING ARBITRARY END POINT FOR NAVIGATION

  let mapElement;
  let map = null;
  let accessToken = 'pk.eyJ1IjoiamJ2aWNlcnJhIiwiYSI6ImNsdjBudzkwbDBmNW0yaXZwamhodDFsZTQifQ.M2wEKMepxK2f0le_AJ4Xmw';
  let mapStyle = 'mapbox://styles/mapbox/streets-v12';
  let viewState = {
  longitude: start[0],
  latitude: start[1],
  zoom: 17,
  };

  // for setting start longitude, latitude on map load
  // longitude: 121.069,
  // latitude: 14.649,

  // for setting max bounds when panning
  const bounds = [
        [121.03904653077666, 14.632427391768406], // SouthWest coordinates
        [121.07972257053247, 14.666687988622964] // NorthEast coordinates
  ];
  
  
  // for pulsating dot
  const size = 200;

  // TRY MAKING PULSATING DOT
  const pulsingDot = {
    width: size,
    height: size,
    data: new Uint8Array(size * size * 4),

    // When the layer is added to the map,
    // get the rendering context for the map canvas.
    onAdd: function () {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
    },

    // Call once before every frame where the icon will be used.
    render: function () {
        const duration = 1500;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.2; //0.3
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

        // OUTER CIRCLE
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            outerRadius,
            0,
            Math.PI * 2
        );
        context.fillStyle = `rgba(254, 100, 111, ${1 - t})`;
        context.fill();

        // INNER CIRCLE
        context.beginPath();
        context.arc(
            this.width / 2,
            this.height / 2,
            radius,
            0,
            Math.PI * 2
        );
        context.fillStyle = 'rgb(156, 41, 62)';
        context.strokeStyle = 'white';
        context.lineWidth = 10 * (1 - t);
        context.fill();
        context.stroke();

        // UPDATE IMAGE DATA WITH CANVAS DATA
        this.data = context.getImageData(
            0,
            0,
            this.width,
            this.height
        ).data;
        // TRIGGER UPDATE
        map.triggerRepaint();
        return true;
    }
  };  

  function handleClick() {
			//window.alert('You have arrived at your destination.');
			const url = `../`;
			goto(url);

      //CLEAN-UP OF MAP INSTANCE
      //clearInterval(updateSource);
      map.remove();
	}

// - - - - - - - MOUNT MAP - - - - - - - - - - - - - -  
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
  // else, make new request
  else {
    map.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: geojson,
        lineMetrics: true
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3396ff', //cool blue
        'line-width': 4,
        'line-opacity': 1,
        'line-gradient': [
                    'interpolate',
                    ['linear'],
                    ['line-progress'],
                    0,
                    '#2ea38c', //green-blue
                    1,
                    '#c52020' //cool red
                ]
            },
    });
  }
  // get the sidebar and add the instructions
  const duration = Math.floor(data.duration*2 / 60);
  const instructions = document.getElementById('instructionupd');
  // use template literal to insert html + variables 
  minutes = minutes + duration

  // it's possible to go beyond 60 minutes once duration is added, so we need to check
  // if minutes value is 60 or above
  if (minutes >= 60){
    //subtract minutes by 60 then add 1 to hours
    minutes = minutes - 60;
    hours = hours + 1
  }
  //check if am or pm
  ampm = hours >= 12 ? 'pm' : 'am';
  //fix hours display
  hours = hours % 12
  hours = hours ? hours : 12;
  // add an extra zero if minutes < 10 to keep the X:XX format
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let time = hours + ":" + minutes + " " + ampm;
  instructions.innerHTML = `<p><strong> ${duration} mins.</strong></p><p>ETA ${time}</p>`;
  }

// - - - - - - - SETUP MAP - - - - - - - - - - - - - -  
function createMap() {
  map = new mapboxgl.Map({
    accessToken: accessToken,
    container: 'map',
    style: mapStyle,
    center: [viewState.longitude, viewState.latitude],
    zoom: viewState.zoom,
    maxBounds: bounds
  });
  // - - - - - - - ADD MAP LAYERS UPON LOADING - - - - - - - - - - - - - -  
  map.on('load', function() {
    // ADD A TEST SOURCE, THEN ADD AS A LAYER
    /*
    map.addSource('contours', {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
      });
      map.addLayer({
          'id': 'contours',
          'type': 'line',
          'source': 'contours', //Must match source
          'source-layer': 'contour',
      });
    */

    // Note: Could add more safety for token
    // Note: Could fix custom map

    // ADD ENTRANCES AS A SOURCE
    map.addSource('entrances', {
        type: 'vector',
        url: 'mapbox://jbvicerra.clv3l14h73n4a1trt1swv4nvo-8aok4' //from campus tileset id
    });
    map.addLayer({
        'id': 'entrancesLayer',
        'type': 'circle',
        'source': 'entrances', //Must match source
        'source-layer': 'UP_Diliman_Campus', //from campus tileset layer name
        'paint': {
          'circle-color': '#A9A9A9', //dark grey
          'circle-radius': 7,
          'circle-stroke-color': 'white',
          'circle-stroke-width': 3,
          'circle-stroke-opacity': 0.8
        }
    })

    // DISABLE MAP ZOOM
    //map.scrollZoom.disable();

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
          'circle-color': '#2ea38c', //green-blue
          'circle-radius': 7,
          'circle-stroke-color': 'white',
          'circle-stroke-width': 3,
          'circle-stroke-opacity': 0.8
        }
    });

    //ADD DESTINATION POINT AS A LAYER IN THE MAP
    map.addLayer({
      id: 'pointdest',
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
                coordinates: end
              }
            }
          ]
        }
      },
      paint: {
          'circle-color': '#c52020', //cool red
          'circle-radius': 7,
          'circle-stroke-color': 'white',
          'circle-stroke-width': 3,
          'circle-stroke-opacity': 0.5
        }
    });

    // ADD POPUP LABELS WHEN LOCATION POINTS ARE CLICKED
    map.on('click', 'entrancesLayer', (e) => {
      const popUps = document.getElementsByClassName('mapboxgl-popup');
      if (popUps[0]) popUps[0].remove();

      var popcoordinates = e.features[0].geometry.coordinates.slice();
      var popdescription = e.features[0].properties.description;
      while (Math.abs(e.lngLat.lng - popcoordinates[0]) > 180) {
        popcoordinates[0] += e.lngLat.lng > popcoordinates[0] ? 360 : -360;
      }

      new mapboxgl.Popup()
          .setLngLat(popcoordinates)
          //.setHTML("placeholder text test")
          .setHTML(popdescription)
          .addTo(map);
      });

    map.on('mouseenter', 'entrancesLayer', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'entrancesLayer', () => {
      map.getCanvas().style.cursor = '';
    });

    // CAN ADD MORE FEATURES UPON LOADING HERE

  });
  // - - - - - - - MAP ON LOAD END - - - - - - - - - - - - - -  
  // - - - - - - - MAP ON LOAD ASYNC - - - - - - - - - - - - - -  
  map.on('load', async () => {
    // GET YOUR CURRENT LOCATION
    const geojson = await getLocation();
    // ADD YOUR CURRENT LOCATION AS A SOURCE
    map.addSource('myPosition', {
        type: 'geojson',
        data: geojson
    });

    // ADD PULSATING DOT IMAGE
    map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 3 });

    // ADD POINT AS A LAYER ON THE MAP
    /*
    map.addLayer({
        'id': 'myPosition',
        'type': 'circle',
        'source': 'myPosition',
        paint: {
          'circle-color': '#1481f5', //cool blue
          'circle-radius': 7,
          'circle-stroke-color': 'white',
          'circle-stroke-width': 3,
          'circle-stroke-opacity': 0.8
        }
    });
    */

    // ADD PULSATING DOT AS A LAYER ON THE MAP
    map.addLayer({
      'id': 'myPosition',
      'type': 'symbol',
      'source': 'myPosition',
      'layout': {
          'icon-image': 'pulsing-dot'
      }
    });

    // UPDATE CURRENT LOCATION SOURCE EVERY 2 SECONDS
    const updateSource = setInterval(async () => {
        const geojson = await getLocation(updateSource);
        map.getSource('myPosition').setData(geojson);

        // CHECK IF CURRENT POSITION IS < 5 METERS FROM DESTINATION
        const myPosition = await getCurrentPosition();
        const { latitude, longitude } = myPosition.coords;

        const distance = getDistance(latitude, longitude, end[1], end[0]);
        // IF DISTANCE < 5, YOU HAVE ARRIVE AT YOUR DESTINATION
        // GOTO MAIN PAGE
        if (distance < 5) {
          window.alert('You have arrived at your destination.');
			    const url = `../`;
			    goto(url);

          //CLEAN-UP OF MAP INSTANCE
          //clearInterval(updateSource);
          map.remove();
        }

    }, 3000); // 3s = 3000ms

    // GET CURRENT POSITION VIA NAVIGATOR
    function getCurrentPosition() {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }

    // ATTEMPT: GET DISTANCE USING HARVERSINE FORMULA
    function getDistance(lat1, long1, lat2, long2) {
      const earthRadius = 6371e3; // Radius of the Earth in meters
      const lat1Radians = lat1 * Math.PI / 180; // Latitude 1 in radians
      const lat2Radians = lat2 * Math.PI / 180; // Latitude 2 in radians
      const latDifference = (lat2 - lat1) * Math.PI / 180; // Difference in latitude in radians
      const lonDifference = (long2 - long1) * Math.PI / 180; // Difference in longitude in radians

      const a = Math.sin(latDifference / 2) * Math.sin(latDifference / 2) + Math.cos(lat1Radians) * Math.cos(lat2Radians) * Math.sin(lonDifference / 2) * Math.sin(lonDifference / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = earthRadius * c; // Distance in meters
      return distance;
    }
      
    // GET LOCATION FUNCTION
    async function getLocation(updateSource) {
        // TRY SECTION
        try {
            // GET CURRENT POSITION
            const position = await getCurrentPosition();
            const { latitude, longitude } = position.coords;
            // FLY TO YOUR CURRENT POSITION

            // TEMPORARILY DISABLE FLYTOOOOOOO
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

  // - - - - - - - MAP ON LOAD ASYNC END- - - - - - - - - - - - - -  
  }
</script>

<style>
  #map {
    width: 100vw;
    height: 100vh;
    margin-top: 10vh;
    overflow: hidden;
    z-index: -1;
  }
  /* Ignore the warning that the CSS Selector is unused. mapboxgl-popup will be generated on runtime */
  /* Svelte can't seem to locate it (?) */
  .mapboxgl-popup {
        max-width: 400px;
        padding: 10px;
        font:
            12px/20px 'Helvetica Neue',
            Arial,
            sans-serif;
  }
  #back_button {
    position: absolute;
    margin-top: 5%;
    margin-left: 5%;
    font-size: 1.4rem;
		font-weight: 600;
    padding: 0.5em 0.7em;
		color: white;
    background-color: #9C293E;
    border-radius: 30%;
  }
  #instructionupd {
    font-size: 0.9rem;
  }
  #instructionswrapper {
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center; 
  }
  #instructions {
    position: absolute;
    margin-top: 5%;
    margin-left: 78vw;
    color: white;
    background-color: #9C293E;
    padding: 1em;
    border-radius: 15%;
  }
  @media (max-width: 720px) {
  #instructions {
    margin-left: 68vw;
  }
  }
</style>