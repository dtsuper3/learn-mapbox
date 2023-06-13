
// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiZHRzdXBlcjMiLCJhIjoiY2p4c3Y5YmFuMGw3cDNobzF5d29uY2g3eCJ9.atc0tuhmrkR8dygFvtoVAw';


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([-0.127758, 51.507351])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12',
        center: center,
        zoom: 15
    });
    map.on('load', () => {
        // map.addSource('places', {
        //     // This GeoJSON contains features that include an "icon"
        //     // property. The value of the "icon" property corresponds
        //     // to an image in the Mapbox Streets style's sprite.
        //     'type': 'geojson',
        //     'data': {
        //         'type': 'FeatureCollection',
        //         'features': [
        //             {
        //                 'type': 'Feature',
        //                 'properties': {
        //                     'description':
        //                         '<strong>Make it Mount Pleasant</strong><p><a href="http://www.mtpleasantdc.com/makeitmtpleasant" target="_blank" title="Opens in a new window">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',
        //                     'icon': 'theatre'
        //                 },
        //                 'geometry': {
        //                     'type': 'Point',
        //                     'coordinates': [77.1888, 28.6550]
        //                 }
        //             },
        //         ]
        //     }
        // });
        // Add a layer showing the places.
        // map.addLayer({
        //     'id': 'places',
        //     'type': 'symbol',
        //     'source': 'places',
        //     'layout': {
        //         'icon-image': ['get', 'icon'],
        //         'icon-allow-overlap': true
        //     }
        // });

        // When a click event occurs on a feature in the places layer, open a popup at the
        // location of the feature, with description HTML from its properties.
        // map.on('click', 'places', (e) => {
        //     // Copy coordinates array.
        //     const coordinates = e.features[0].geometry.coordinates.slice();
        //     const description = e.features[0].properties.description;

        //     // Ensure that if the map is zoomed out such that multiple
        //     // copies of the feature are visible, the popup appears
        //     // over the copy being pointed to.
        //     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //         coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        //     }

        //     new mapboxgl.Popup()
        //         .setLngLat(coordinates)
        //         .setHTML(description)
        //         .addTo(map);
        // });

        // Change the cursor to a pointer when the mouse is over the places layer.
        // map.on('mouseenter', 'places', () => {
        //     map.getCanvas().style.cursor = 'pointer';
        // });

        // Change it back to a pointer when it leaves.
        // map.on('mouseleave', 'places', () => {
        //     map.getCanvas().style.cursor = '';
        // });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "bottom-right");

        map.addControl(
            new MapboxDirections({
                accessToken: mapboxgl.accessToken
            }),
            'top-left'
        );
    });

}

